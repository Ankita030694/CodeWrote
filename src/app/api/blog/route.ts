import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const blogsCollection = db.collection('blogs');

    const blogs = await blogsCollection.find({}).sort({ date: -1 }).toArray();

    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      id: blog._id.toString(), // Map _id to id for the frontend
      _id: undefined, // Remove the raw ObjectID
    }));

    return NextResponse.json(formattedBlogs, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Clean undefined fields (MongoDB doesn't mind as much as Firestore, but good practice)
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );

    const client = await clientPromise;
    const db = client.db();
    const blogsCollection = db.collection('blogs');

    const result = await blogsCollection.insertOne({
      ...cleanData,
      created: Date.now(),
    });

    return NextResponse.json(
      { message: 'Blog created successfully', id: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
