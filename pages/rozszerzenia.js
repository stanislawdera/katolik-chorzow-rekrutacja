import { Container } from "components/atoms/Container/Container.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { Header } from "components/molecules/Header/Header.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import profilesImage from "../public/assets/profiles.png";

export default function ProfilesPage() {
  return (
    <Layout>
      <Head>
        <title>Rozszerzenia - Rekrutacja Katolik Chorzów</title>
      </Head>
      <Header color="yellow">
        <h1>Dobierz swój profil</h1>
      </Header>
      <Container>
        <Paragraph mt="lg">
          W Katoliku klasa nie ma z góry nałożonego rozszerzenia (np. nie ma
          klasy biologiczno-chemicznej, matematyczno-geograficznej itd.).
        </Paragraph>
        <Paragraph mt="md" mb="lg">
          Zamiast tego powstaje jedna klasa, a każdy z uczniów samodzielnie
          decyduje, który przedmiot realizuje na poziomie rozszerzonym (do
          wyboru: matematyka, biologia, WOS) oraz, opcjonalnie, wybiera
          seminarium (do wyboru: fizyka, chemia, geografia, historia, język
          niemiecki). Poza tym, każdy profil uwzględnia rozszerzony język
          angielski.
        </Paragraph>
        <Image
          placeholder="blur"
          src={profilesImage}
          alt=""
          width={800}
          height={861}
        />
      </Container>
    </Layout>
  );
}
