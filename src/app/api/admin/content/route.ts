import { NextResponse } from 'next/server';
import { getContent } from '@/lib/content-read';

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
    const content = await getContent();
    return NextResponse.json(content);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const authError = verifyAuth(request);
  if (authError) return authError;

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
