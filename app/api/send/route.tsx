import { EmailTemplate } from '@/components/email';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, message, subject } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'No-Reply Moonlit Servers <noreply@moonlitservers.com>',
      to: ['admin@moonlitservers.com'],
      subject: subject || 'New message from Moonlit Servers',
      react: EmailTemplate({ email, message }),
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
