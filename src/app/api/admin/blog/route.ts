import { NextResponse } from 'next/server';
import { getAllPostSlugs, getPostBySlug, savePost, deletePost, BlogPost } from '@/lib/markdown';

function verifyAuth(request: Request): NextResponse | null {
  const authHeader = request.headers.get('authorization');
  const expectedPassword = process.env.ADMIN_PASSWORD;
  
  if (!expectedPassword) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const token = authHeader.substring(7);
  if (token !== expectedPassword) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  return null;
}

export async function GET(request: Request) {
  const authError = verifyAuth(request);
  if (authError) return authError;
  
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map((slug) => getPostBySlug(slug))
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const authError = verifyAuth(request);
  if (authError) return authError;
  
  try {
    const body = await request.json();
    const { slug, title, content, excerpt, author, date, tags, image, isPublished } = body;

    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const postData: BlogPost = {
      slug,
      title,
      excerpt: excerpt || '',
      content,
      author: author || 'AiAutomate47 Team',
      date: date || new Date().toISOString().split('T')[0],
      tags: tags || [],
      image,
      isPublished: isPublished !== false,
    };

    savePost(slug, postData);
    return NextResponse.json({ success: true, slug });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const authError = verifyAuth(request);
  if (authError) return authError;
  
  try {
    const body = await request.json();
    const { slug, ...postData } = body;

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }

    savePost(slug, postData as BlogPost);
    return NextResponse.json({ success: true, slug });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const authError = verifyAuth(request);
  if (authError) return authError;
  
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
    }

    deletePost(slug);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}