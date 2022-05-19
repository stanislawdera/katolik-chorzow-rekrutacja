import Head from "next/head";
import Layout from "components/organisms/Layout/Layout";
import HeroHeader from "components/organisms/HeroHeader/HeroHeader";
import { FeatureBlock } from "components/molecules/FeatureBlock/FeatureBlock.styles";
import ArrowLink from "components/atoms/ArrowLink/ArrowLink";
import { BlocksRow } from "components/organisms/BlocksRow/BlocksRow.styles";

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
      <BlocksRow>
        <FeatureBlock color="red">
          <h3>
            248 sekund
            <br />
            dookoła szkoły
          </h3>
          <ArrowLink href="https://youtu.be/SexCpPPKOi4" size="md">
            Obejrzyj film
          </ArrowLink>
        </FeatureBlock>
        <FeatureBlock color="yellow">
          <h3>
            Elastyczny
            <br />
            dobór
            <br />
            rozszerzeń
          </h3>
          <ArrowLink href="/rozszerzenia" size="md">
            Więcej informacji
          </ArrowLink>
        </FeatureBlock>
      </BlocksRow>
      <BlocksRow>
        <FeatureBlock color="blue">
          <h3>
            Dokumenty
            <br />i do pobrania
          </h3>
          <ArrowLink href="/dokumenty" size="md">
            Zobacz
          </ArrowLink>
        </FeatureBlock>
        <FeatureBlock color="green">
          <h3>
            Rekrutacja
            <br />
            krok po kroku
          </h3>
          <ArrowLink href="/krok-po-kroku" size="md">
            Zobacz
          </ArrowLink>
        </FeatureBlock>
      </BlocksRow>
    </Layout>
  );
}
