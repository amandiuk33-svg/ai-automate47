import { NextResponse } from 'next/server';
import { getDb } from '@/app/api/db/route';

export async function GET() {
  try {
    const db = getDb();
    const posts = db.prepare('SELECT * FROM blog_posts WHERE is_published = 1 ORDER BY published_at DESC').all();
    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const db = getDb();
    const { title, slug, content, excerpt, author } = await request.json();
    const stmt = db.prepare(
      'INSERT INTO blog_posts (title, slug, content, excerpt, author, is_published, published_at) VALUES (?, ?, ?, ?, ?, 1, datetime("now"))'
    );
    const result = stmt.run(title, slug, content, excerpt, author || 'AiAutomate47');
    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}