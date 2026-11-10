import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import path from 'path';

export async function POST() {
  try {
    const scriptPath = path.join(process.cwd(), 'scripts', 'init-db.js');
    execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
    return NextResponse.json({ success: true, message: 'Database initialized successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}