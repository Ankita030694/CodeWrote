import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(req: Request) {
    try {
        const { primaryKeyword, secondaryKeyword } = await req.json();

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary keyword is required' }, { status: 400 });
        }

        const prompt = `
Generate a comprehensive, SEO-optimized blog post about "${primaryKeyword}". 
The focus should be on expert technical insights, professional web development trends, and business value. 
Use the secondary keyword "${secondaryKeyword}" naturally if provided.

Key SEO Target: We want to rank for "website development", "website developer", "website maker", "best web development company", and "hire web developer". 
Ensure the content feels premium, technical yet accessible, and showcases CodeWrote's authority.

The response must be valid JSON with the following structure:
{
  "title": "A compelling, clickable title containing development keywords",
  "subtitle": "An engaging subtitle that expands on the title",
  "description": "HTML content with <h2>, <p>, and <ul> tags. Must be at least 5 paragraphs and very detailed.",
  "metaTitle": "SEO meta title (max 60 chars)",
  "metaDescription": "SEO meta description (max 160 chars)",
  "slug": "url-friendly-slug",
  "faqs": [
    { "question": "Question 1", "answer": "Answer 1" },
    { "question": "Question 2", "answer": "Answer 2" }
  ],
  "reviews": [
    { "name": "A diverse international name (e.g., Rahul Sharma, Lachlan Murray, James Whitmore, Sarah Jenkins, or Michael Chen)", "rating": 5, "review": "Detailed review about the web development project success and professional experience with CodeWrote." },
    { "name": "Another international name from a different region (Indian, Australian, English, Canadian, or American)", "rating": 5, "review": "Positive feedback on the website maker services, highlighting technical expertise and timely delivery." }
  ],
  "suggestedImagePrompt": "A detailed DALL-E 3 description for a high-tech, modern web development workspace or abstract coding art"
}

Important: Return ONLY valid JSON. No other text.
`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a world-class SEO strategist and full-stack website development expert at CodeWrote. Your goal is to rank this website for high-value keywords like 'website development', 'website developer', 'website maker', 'custom web design', and 'professional web solutions'." },
                { role: "user", content: prompt }
            ],
            response_format: { type: "json_object" }
        });

        const blogData = JSON.parse(response.choices[0].message.content || '{}');

        return NextResponse.json(blogData);
    } catch (error: any) {
        console.error('Generation error:', error);
        return NextResponse.json({ error: error.message || 'Generation failed' }, { status: 500 });
    }
}
