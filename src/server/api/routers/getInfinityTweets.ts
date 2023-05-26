// getInfiniteTweets.ts
import { Prisma } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";
import { createTRPCContext } from "~/server/api/trpc";

export async function getInfiniteTweets({
  whereClause,
  ctx,
  limit,
  cursor,
}: {
  whereClause?: Prisma.TweetWhereInput;
  limit: number;
  cursor: { id: string; createdAt: Date } | undefined;
  ctx: inferAsyncReturnType<typeof createTRPCContext>;
}) {
    const currentUserId = ctx.session?.user.id;
    
    const data = await ctx.prisma.tweet.findMany({
        take: limit + 1,
        cursor: cursor ? { createdAt_id: cursor } : undefined,
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        where: whereClause,
        select: {
        id: true,
        content: true,
        createdAt: true,
        _count: { select: { likes: true } },
        likes:
            currentUserId == null ? false : { where: { userId: currentUserId } },
        user: {
            select: { name: true, id: true, image: true },
        },
        },
    });
    
    let nextCursor: typeof cursor | undefined;
    if (data.length > limit) {
        const nextItem = data.pop();
        if (nextItem != null) {
        nextCursor = { id: nextItem.id, createdAt: nextItem.createdAt };
        }
    }
    
    return {
        tweets: data.map((tweet) => {
        return {
            id: tweet.id,
            content: tweet.content,
            createdAt: tweet.createdAt,
            likeCount: tweet._count.likes,
            user: tweet.user,
            likedByMe: tweet.likes?.length > 0,
        };
        }),
        nextCursor,
    };
}
