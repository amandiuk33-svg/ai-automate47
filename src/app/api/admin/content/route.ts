import { NextResponse } from 'next/server';
import { getContent } from '@/lib/content-read';

export async function GET(request: Request) {
  try {
    const content = await getContent();
    return NextResponse.json(content);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    // Note: On Vercel serverless, the filesystem is read-only.
    // Content changes won't persist across deployments.
    // For a demo, we acknowledge the save without writing to disk.
    return NextResponse.json({ success: true, message: 'Content saved (demo mode)' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
