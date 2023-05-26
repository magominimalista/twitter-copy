import { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { SideNav } from "~/components/SideNav";

const MyApp = ({ Component, pageProps }: AppProps<{ session: Session | null }>) => {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta
          name="description"
          content="Clone do Twitter desenvolvido como projeto de estudo e aprendizado. Este site não possui afiliação com o Twitter e não oferece funcionalidades de postagem real ou acesso a dados reais do Twitter."
        />
        <meta name="clone-twitter-purpose" content="Estudo e aprendizado do desenvolvimento web" />
        <meta name="keywords" content="magominimalista, twitter-clone" />
        <meta name="author" content="Mago Minimalista" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900 text-gray-50">
        <div className="container mx-auto flex items-start sm:pr-4">
          <SideNav />
          <div className="min-h-screen flex-grow border-x">
            <Component {...restPageProps} />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
