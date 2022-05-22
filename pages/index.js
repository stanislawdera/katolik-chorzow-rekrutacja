import Head from "next/head";
import Layout from "components/organisms/Layout/Layout";
import HeroHeader from "components/organisms/HeroHeader/HeroHeader";
import { FeatureBlock } from "components/molecules/FeatureBlock/FeatureBlock.styles";
import ArrowLink from "components/atoms/ArrowLink/ArrowLink";
import { BlocksRow } from "components/organisms/BlocksRow/BlocksRow.styles";
import { Container } from "components/atoms/Container/Container.styles";
import ReasonBlock from "components/molecules/ReasonBlock/ReasonBlock";
import Icon from "@mdi/react";
import {
  mdiAccountGroup,
  mdiCheckDecagram,
  mdiImageFilterHdr,
  mdiMap,
} from "@mdi/js";
import { BlocksGrid } from "components/molecules/BlocksGrid/BlocksGrid.styles";
import { Heading } from "components/atoms/Heading/Heading.styles";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rekrutacja do liceum - Katolik Chorzów</title>
        <meta
          name="description"
          content="Najważniejsze informacje dla kandydatów w jednym miejscu!"
        />
        <meta
          property="og:url"
          content="https://rekrutacja.katolik-chorzow.edu.pl"
        />
        <meta
          property="og:title"
          content="Rekrutacja do Liceum Ogólnokształcącego"
        />
        <meta
          property="og:description"
          content="Najważniejsze informacje dla kandydatów"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/testpogotowia.appspot.com/o/rekrutacja-og-image.png?alt=media&token=6dc8485c-3a9c-4694-93af-99b0b8743c48"
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
        <FeatureBlock color="yellow" asset="puzzle">
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
        <FeatureBlock color="red" asset="youtube">
          <h3>
            248 sekund
            <br />
            dookoła szkoły
          </h3>
          <ArrowLink href="https://youtu.be/SexCpPPKOi4" size="md" newTab>
            Obejrzyj film
          </ArrowLink>
        </FeatureBlock>
      </BlocksRow>
      <Container wide>
        <Heading>Dlaczego Katolik?</Heading>
        <BlocksGrid mb="xl">
          <ReasonBlock
            title="Samorząd"
            icon={<Icon path={mdiAccountGroup} />}
          ></ReasonBlock>
          <ReasonBlock
            title="Wspinaczka"
            icon={<Icon path={mdiImageFilterHdr} />}
          ></ReasonBlock>
          <ReasonBlock
            title="Wysokie miejsca w rankingach"
            icon={<Icon path={mdiCheckDecagram} />}
          ></ReasonBlock>
          <ReasonBlock
            title="Wycieczki zagraniczne"
            icon={<Icon path={mdiMap} />}
          ></ReasonBlock>
        </BlocksGrid>
      </Container>
      <BlocksRow>
        <FeatureBlock color="blue" asset="files">
          <h3>
            Dokumenty
            <br />i do pobrania
          </h3>
          <ArrowLink href="/dokumenty" size="md">
            Zobacz
          </ArrowLink>
        </FeatureBlock>
        <FeatureBlock color="green" asset="list">
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
