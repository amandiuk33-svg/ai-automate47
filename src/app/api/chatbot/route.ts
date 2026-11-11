import { NextResponse } from 'next/server';

const CHATBOT_QA = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'We offer AI consultancy, workflow automation, social media management, asset generation (images, text, videos), and custom AI-powered dashboards for small businesses.',
    category: 'services',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    question: 'How much does it cost?',
    answer: 'Our pricing starts at $499/month for small businesses. We offer custom packages based on your specific needs. Visit our pricing page for details.',
    category: 'pricing',
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    question: 'Do you work with small businesses?',
    answer: 'Yes! AiAutomate47 specializes in helping US small businesses leverage AI to grow and automate their operations.',
    category: 'general',
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    question: 'How do I book a consultation?',
    answer: 'You can book a free consultation through our pricing page or contact us directly. We typically respond within 24 hours.',
    category: 'booking',
    created_at: new Date().toISOString()
  }
];

export async function GET() {
  try {
    return NextResponse.json(CHATBOT_QA);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { question, answer, category } = await request.json();
    console.log('New chatbot Q&A:', { question, answer, category });
    return NextResponse.json({ id: Date.now(), success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
