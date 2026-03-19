import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `Cinematic, photorealistic professional business image. ${prompt}. High quality, 4k, clean composition.`,
            n: 1,
            size: "1024x1024",
            quality: "hd",
            style: "natural"
        });

        const imageUrl = response.data?.[0]?.url;

        if (!imageUrl) {
            throw new Error('Image URL not found in response');
        }

        return NextResponse.json({ imageUrl });
    } catch (error: any) {
        console.error('Image generation error:', error);
        return NextResponse.json({ error: error.message || 'Image generation failed' }, { status: 500 });
    }
}
