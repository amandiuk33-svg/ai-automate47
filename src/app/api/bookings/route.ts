import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Booking submitted - in production, send email notification
    console.log('New booking:', body);
    return NextResponse.json({ success: true, message: 'Booking submitted successfully. We will contact you shortly.' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
