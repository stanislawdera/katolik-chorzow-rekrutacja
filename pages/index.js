import Head from "next/head";
import Layout from "components/organisms/Layout/Layout";
import HeroHeader from "components/organisms/HeroHeader/HeroHeader";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rekrutacja do liceum - Katolik Chorzów</title>
        <meta
          name="description"
          content="Najważniejsze informacje dla kandydatów w jednym miejscu!"
        />
      </Head>
      <HeroHeader>
        <h2>
          Katolik
          <br />
          Chorzów
        </h2>
        <h1>Rekrutacja 2022</h1>
      </HeroHeader>
    </Layout>
  );
}
