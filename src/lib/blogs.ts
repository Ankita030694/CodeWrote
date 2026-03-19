import clientPromise from "./mongodb";

export interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
  author?: string;
}

export async function getBlogs(): Promise<Blog[]> {
  const client = await clientPromise;
  const db = client.db();
  const blogsCollection = db.collection("blogs");
  
  const blogs = await blogsCollection.find({}).sort({ date: -1 }).toArray();
  
  return blogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(),
  })) as any as Blog[];
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const client = await clientPromise;
  const db = client.db();
  const blogsCollection = db.collection("blogs");
  
  const blog = await blogsCollection.findOne({ slug });
  
  if (!blog) return null;
  
  return {
    ...blog,
    _id: blog._id.toString(),
  } as any as Blog;
}
