import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { InfiniteTweetList } from "~/components/InfiniteTweetList";
import { NewTweetForm } from "~/components/NewTweetForm";
import { RecentTweets, FollowingTweets } from "~/components/TweetComponents";
import { api } from "~/utils/api";
import TabButton from "~/components/TabButton";

const TABS = ["Recent", "Following"] as const;

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState<typeof TABS[number]>("Recent");
  const session = useSession();

  const handleTabClick = (tab: typeof TABS[number]) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-gray-600 bg-gray-900 pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
        {session.status === "authenticated" && (
          <div className="flex">
            {TABS.map((tab) => (
              <TabButton
                key={tab}
                tab={tab}
                selectedTab={selectedTab}
                onClick={handleTabClick}
              />
            ))}
          </div>
        )}
      </header>
      <NewTweetForm />
      {selectedTab === "Recent" ? <RecentTweets /> : <FollowingTweets />}
    </>
  );
};

export default Home;
