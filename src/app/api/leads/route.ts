import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, state, email, phone, message } = body;

    // Validate entries
    if (!name || !state || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("default"); // Using 'default' database as per connection string

    // Insert document into "leads" collection
    const result = await db.collection("leads").insertOne({
      name,
      state,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Lead saved successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("default");
    
    // Fetch all leads, sorted by newest first
    const leads = await db.collection("leads")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(leads);
  } catch (error: any) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
