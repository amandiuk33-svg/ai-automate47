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
    const fs = await import('fs');
    const path = await import('path');
    const configPath = path.join(process.cwd(), 'src', 'content', 'site-config.json');
    const jsonContent = JSON.stringify(body, null, 2);
    await fs.promises.writeFile(configPath, jsonContent, 'utf8');
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
