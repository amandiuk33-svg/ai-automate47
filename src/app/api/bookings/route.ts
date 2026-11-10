import { NextResponse } from 'next/server';
import { getDb } from '@/app/api/db/route';

export async function POST(request: Request) {
  try {
    const db = getDb();
    const { name, email, phone, service, preferred_date, preferred_time, message } = await request.json();
    const stmt = db.prepare(
      'INSERT INTO bookings (name, email, phone, service, preferred_date, preferred_time, message, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(name, email, phone || '', service || '', preferred_date || '', preferred_time || '', message || '', 'pending');
    return NextResponse.json({ id: result.lastInsertRowid, success: true, message: 'Booking submitted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}