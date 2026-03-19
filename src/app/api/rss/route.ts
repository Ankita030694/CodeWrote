import { NextResponse } from 'next/server';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET() {
  try {
    const q = query(collection(db, 'blogs'), orderBy('date', 'desc'), limit(50));
    const snapshot = await getDocs(q);
    
    const items = snapshot.docs.map(doc => {
      const data = doc.data();
      const link = `${process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://www.codewrote.com'}/blog/${data.slug || doc.id}`;
      return `
        <item>
          <title>${(data.title || '').replace(/&/g, '&amp;')}</title>
          <link>${link}</link>
          <description>${(data.subtitle || '').replace(/&/g, '&amp;')}</description>
          <pubDate>${new Date(data.date).toUTCString()}</pubDate>
          <guid isPermaLink="false">${doc.id}</guid>
          ${data.image ? `<enclosure url="${data.image}" length="0" type="image/jpeg" />` : ''}
        </item>
      `;
    }).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>CodeWrote Blog</title>
    <link>https://www.codewrote.com/blog</link>
    <description>Latest insights into website development and AI automation.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('RSS error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
