import { NextResponse } from 'next/server';
import { getDb } from '@/app/api/db/route';

export async function GET() {
  try {
    const db = getDb();
    const qa = db.prepare('SELECT * FROM chatbot_qa ORDER BY created_at DESC').all();
    return NextResponse.json(qa);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const db = getDb();
    const { question, answer, category } = await request.json();
    const stmt = db.prepare(
      'INSERT INTO chatbot_qa (question, answer, category) VALUES (?, ?, ?)'
    );
    const result = stmt.run(question, answer, category || 'general');
    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}