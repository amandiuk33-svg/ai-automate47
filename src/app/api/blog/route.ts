import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/markdown';

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, slug, content, excerpt, author } = await request.json();
    return NextResponse.json({ slug: slug || title.toLowerCase().replace(/\s+/g, '-'), success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
