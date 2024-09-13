import PostEditor from "@/components/post/editor/PostEditor";
import Post from "@/components/post/Post";
import TrendsSidebar from "@/components/ui/trends-side-bar";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: postDataInclude,
    orderBy: { createAt: 'desc' }
  })
  return (
    <main className="w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        {posts?.map(item => {
          return <Post post={item} key={item?.id} />
        })}
      </div>
      <TrendsSidebar />
    </main>
  );
}
