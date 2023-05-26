import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingSpinner } from "./LoadingSpinner";
import { TweetCard, Tweet } from "./InfiniteTweetCard";

type InfiniteTweetListProps = {
  tweets?: Tweet[];
  isError: boolean;
  isLoading: boolean;
  fetchNewTweets: () => Promise<unknown>;
  hasMore: boolean | undefined;
};

export function InfiniteTweetList({
  tweets,
  isError,
  isLoading,
  fetchNewTweets,
  hasMore = false,
}: InfiniteTweetListProps) {
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <h1>Error...</h1>;

  if (tweets == null || tweets.length === 0) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  }

  return (
    <ul>
      <InfiniteScroll
        dataLength={tweets.length}
        next={fetchNewTweets}
        hasMore={hasMore}
        loader={<LoadingSpinner />}
      >
        {tweets.map((tweet) => {
          return <TweetCard key={tweet.id} {...tweet} />;
        })}
      </InfiniteScroll>
    </ul>
  );
}
