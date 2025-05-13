// Central mcp handler


import { type NextRequest, NextResponse } from 'next/server';
import { OpenAIStream } from '@/lib/openai';
import { type MCPContext } from '@/lib/mcp';

export async function POST(req: NextRequest) {
  const { mcp }: { mcp: MCPContext } = await req.json();

  if (!mcp || !mcp.feature || !mcp.goal || !mcp.inputs) {
    return NextResponse.json({ error: 'Invalid MCP payload' }, { status: 400 });
  }

  // ✨ Customize prompt logic per feature
  let prompt = '';

  switch (mcp.feature) {
    case 'rephrase':
      prompt = `You are ${mcp.brandPersona}. Your goal is to ${mcp.goal}.
Tone: ${mcp.tone}
Language: ${mcp.userLanguage}
Platform: ${mcp.platform}

Sentence:
${mcp.inputs.sentence}`;
      break;

    case 'translate':
      prompt = `Translate this text to ${mcp.userLanguage === 'ar' ? 'Arabic' : 'English'}, professionally and clearly for a CV:
${mcp.inputs.text}`;
      break;

    case 'summary':
      prompt = `Summarize the following user experience into a professional bullet point for a resume.
Input:
${mcp.inputs.experience}`;
      break;

    default:
      return NextResponse.json({ error: 'Unsupported feature' }, { status: 400 });
  }

  const stream = await OpenAIStream({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  return new Response(stream);
}