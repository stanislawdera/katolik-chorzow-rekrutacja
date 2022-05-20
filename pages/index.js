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
  mdiAlbum,
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
