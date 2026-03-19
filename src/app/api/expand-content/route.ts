import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(req: Request) {
    try {
        const { content, prompt } = await req.json();

        if (!content) {
            return NextResponse.json({ error: 'Current content is required' }, { status: 400 });
        }

        const systemPrompt = `
You are a premier website development consultant and SEO expert at CodeWrote. 
Your task is to take the existing blog content and expand it by at least 4-5 high-impact technical and strategic sections (HTML <h2> and <p>) focusing on "${prompt || 'modern web technologies, scalability, and UX design'}". 
Target keywords: "website development", "best website maker", "hiring a web developer", and "scalable web solutions".
Return the full updated content in HTML.
`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Existing Content:\n${content}\n\nAdd content focusing on: ${prompt || 'Deper analysis'}` }
            ],
        });

        const expandedContent = response.choices[0].message.content || content;

        return new NextResponse(expandedContent, {
            headers: { 'Content-Type': 'text/plain' },
        });
    } catch (error: any) {
        console.error('Expansion error:', error);
        return NextResponse.json({ error: error.message || 'Expansion failed' }, { status: 500 });
    }
}
