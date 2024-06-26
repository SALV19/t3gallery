import { Index } from "drizzle-orm/mysql-core";
import Link from "next/link";
import { db } from "../server/db";

const mockURLs = [
  "https://utfs.io/f/915ec2d2-78cb-4d23-a9a7-493a26e1a9e0-cd8q3q.jpg",
  "https://utfs.io/f/935e619a-a952-48eb-bcfe-ecbec6b4e119-aemayi.jpg",
  "https://utfs.io/f/a4d5274c-3066-4780-81c1-6c9dddec52d9-1re4b6._Andrew's_01.jpg",
  "https://utfs.io/f/d766428e-deb7-4942-ae57-032536042f9a-33.jpg",
  "https://utfs.io/f/e7d6dd03-f6bb-4211-9acb-0e526f288b76-1pmgct.jpg",
  "https://utfs.io/f/6e916dc5-2528-45b3-8b54-20a35cf85ecc-kwnp4r.jpg",
  "https://utfs.io/f/f74590e9-3f97-4ad3-a3f0-e72e6fcff620-1pmgby.jpg",
  "https://utfs.io/f/5b83ad8e-92cc-437e-9b87-fdffcc8ecda0-1pmgb3.jpg",
  "https://utfs.io/f/609e6640-c417-41dd-aa53-a90aec55192f-5c6rq9.jpg",
  "https://utfs.io/f/5b1f8472-60fa-44d2-a801-4def09e0f49b-wnfrgc.jpg"
]
const mockImgs = mockURLs.map((url, index) => ({
  id: index +1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center "> 
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
            <div key={post.id}> {post.name} </div> 
        ))}
        {mockImgs.map((image) => (
          <div key={image.id} className="w-72">
            <img src={image.url} />
          </div>  
        ))}
      </div>
    </main>
  );
}
