import Head from "next/head";
import Header from "../component/Header/Index";
import SimpleModal from "../component/Modal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Agro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
