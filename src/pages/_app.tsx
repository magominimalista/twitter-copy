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
        <title>Twitter Clone - Apenas para fins de didáticos</title>
        <meta name="description" content="Clone do Twitter desenvolvido como projeto de estudo e aprendizado. Este site não possui afiliação com o Twitter e não oferece funcionalidades de postagem real ou acesso a dados reais do Twitter.">
        <meta name="clone-twitter-purpose" content="Estudo e aprendizado do desenvolvimento web">
        <meta name="keywords" content="magominimalista, twitter-clone">
        <meta name="author" content="Mago Minimalista">
        <meta name="robots" content="index, follow">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
