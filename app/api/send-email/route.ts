// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend (you'll need to install: npm install resend)
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5; // Max 5 emails per hour per IP

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  const rateLimitInfo = rateLimitMap.get(ip);
  
  if (now > rateLimitInfo.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (rateLimitInfo.count >= maxRequests) {
    return true;
  }

  rateLimitInfo.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    
    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { provider, emailData } = body;

    // Validate required fields
    if (!emailData || !emailData.to || !emailData.subject || !emailData.html) {
      return NextResponse.json(
        { error: 'Missing required email fields' },
        { status: 400 }
      );
    }

    let result;

    switch (provider) {
      case 'resend':
        result = await resend.emails.send({
          from: emailData.from || 'noreply@effi-tech.net',
          to: emailData.to,
          subject: emailData.subject,
          html: emailData.html,
          text: emailData.text,
        });
        break;

      case 'nodemailer':
        // Implement nodemailer logic here
        throw new Error('Nodemailer not implemented in this example');

      default:
        return NextResponse.json(
          { error: 'Unsupported email provider' },
          { status: 400 }
        );
    }

    return NextResponse.json({ 
      success: true, 
      messageId: result.data?.id 
    });

  } catch (error) {
    console.error('Email API error:', error);
    
    const errorMessage =
      process.env.NODE_ENV === 'development' && error && typeof error === 'object' && 'message' in error
        ? (error as { message: string }).message
        : undefined;

    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

// Optional: Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}