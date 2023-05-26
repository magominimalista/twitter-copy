import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { SideNav } from "~/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="This is a Twitter clone by Mago Minimalista"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900 text-gray-50">
        <div className="container mx-auto flex items-start sm:pr-4">
          <SideNav />
          <div className="min-h-screen flex-grow border-x border-gray-800">
            <Component {...pageProps} />
          </div>
          
        </div>
      </div>
      
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
