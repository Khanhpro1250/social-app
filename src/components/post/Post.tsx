import { PostData } from "@/lib/types"
import Link from "next/link"
import UserAvatar from "../ui/user-avatar"
import { formatRelativeDate } from "@/lib/utils"


interface PostProps {
    post: PostData
}

export default function Post({ post, ...props }: PostProps) {
    return (
        <article className="space-y-3 rounded-2xl bg-card shadow-sm p-5">
            <div className="flex flex-wrap gap-3">
                <Link href={`/users${post?.user?.username}`}>
                    <UserAvatar avatarUrl={post?.user?.avatarUrl} />
                </Link>
                <div>
                    <Link href={`/users${post?.user?.username}`} className="block font-medium hover:underline">
                        {post?.user?.displayName}
                    </Link>
                    <Link href={`/posts/${post?.id}`} className="block text-sm text-muted-foreground hover:underline">
                        {formatRelativeDate(post?.createAt)}
                    </Link>
                </div>
            </div>
            <div className="whitespace-pre-line break-wors">
                {post?.content}
            </div>
        </article>
    )
}