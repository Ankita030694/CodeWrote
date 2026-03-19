import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";

// Manually parse .env.local
let uri: string | undefined;
try {
  const envPath = path.resolve(process.cwd(), ".env.local");
  const envContent = fs.readFileSync(envPath, "utf-8");
  const match = envContent.match(/MONGODB_URI=["']?([^"'\n]+)["']?/);
  if (match) {
    uri = match[1];
  }
} catch (e) {
  console.error("Error reading .env.local:", e);
}

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

async function seed() {
  const client = new MongoClient(uri!);
  try {
    await client.connect();
    const db = client.db();
    const blogsCollection = db.collection("blogs");

    const dummyBlogs = [
      {
        title: "HOW TO BUILD A HIGH-CONVERTING WEBSITE IN 2026",
        slug: "how-to-build-high-converting-website",
        excerpt: "Discover the essential elements that turn visitors into customers in the modern digital landscape. From speed to storytelling.",
        content: `
          <p>In 2026, a website is more than just a digital business card. It's your most hardworking salesperson, available 24/7 to convert interest into revenue. But what makes a website actually "sell"?</p>
          
          <h2>1. SPEED IS THE NEW CURRENCY</h2>
          <p>If your site takes more than 1.5 seconds to load, you've already lost half your audience. Using frameworks like Next.js and optimizing images is no longer optional—it's the baseline.</p>
          
          <h2>2. PSYCHOLOGICAL DESIGN</h2>
          <p>Design isn't just about looking pretty. It's about guiding the eye. We use "F-patterns" and strategic white space to ensure users see your value proposition first and your CTA second.</p>
          
          <h2>3. AUTOMATION INTEGRATION</h2>
          <p>A high-converting website should be connected to your CRM. When a lead submits a form, they should get an instant response, and your team should be notified immediately. That's the CodeWrote way.</p>
          
          <p>Ready to level up? Let's build something that actually moves the needle for your business.</p>
        `,
        date: new Date().toISOString(),
        category: "DEVELOPMENT",
        author: "Anuj Anand Malik",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
      },
      {
        title: "WHY SYSTEMS RUNNING ON AUTOPILOT ARE THE FUTURE",
        slug: "why-systems-on-autopilot-are-the-future",
        excerpt: "The most successful businesses aren't the ones working the hardest—they're the ones with the best automation systems.",
        content: `
          <p>Hard work is overrated. Smart systems are underrated. In this article, we explore why automation is the single biggest competitive advantage for startups in 2026.</p>
          
          <h2>THE HUMAN BOTTLENECK</h2>
          <p>Humans are great for creativity and strategy, but terrible for repetitive tasks. If you're still manually responding to every inquiry or updating your inventory, you're scaling in slow motion.</p>
          
          <h2>WHAT CAN YOU AUTOMATE?</h2>
          <ul>
            <li>Lead generation and nurturing</li>
            <li>Customer support with AI agents</li>
            <li>Dynamic pricing models</li>
            <li>Content distribution</li>
          </ul>
          
          <h2>THE ROI OF AUTOMATION</h2>
          <p>The upfront cost of building a custom CRM or automation flow is often recovered within the first three months through saved man-hours and prevented lead leakage.</p>
          
          <p>Stop working in your business and start working on it. Let's automate your growth.</p>
        `,
        date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        category: "AUTOMATION",
        author: "Team Codewrote",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
      }
    ];

    // Clear existing dummy posts if they exist
    await blogsCollection.deleteMany({ slug: { $in: dummyBlogs.map(b => b.slug) } });
    
    const result = await blogsCollection.insertMany(dummyBlogs);
    console.log(`${result.insertedCount} dummy blogs inserted!`);

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
  }
}

seed();
