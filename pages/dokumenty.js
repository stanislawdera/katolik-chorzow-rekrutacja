import { Container } from "components/atoms/Container/Container.styles";
import { Flex } from "components/atoms/Flex/Flex.styles";
import FileBlock from "components/molecules/FileBlock/FileBlock";
import { Header } from "components/molecules/Header/Header.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";

export default function DocumentsPage() {
  return (
    <Layout>
      <Head>
        <title>Dokumenty - Rekrutacja Katolik Chorzów</title>
      </Head>
      <Header color="blue">
        <h1>Dokumenty</h1>
      </Header>
      <Container>
        <Flex>
          <FileBlock
            title="Regulamin rekrutacji"
            link="https://katolikchorzow-my.sharepoint.com/:w:/g/personal/it_katolik-chorzow_edu_pl/EQOp44iR6yRBhNm0ey8IqbsBYRA60K8DVjZGS4trGtFBTw"
          />
          <FileBlock
            title="Karta zgłoszeniowa (PDF)"
            link="https://katolikchorzow-my.sharepoint.com/:b:/g/personal/it_katolik-chorzow_edu_pl/EWvqcdxxSy9KgQeG3ArMaGkB5sP08nUijQJpwEObK14Gmw?e=wZ08qN"
          />
          <FileBlock
            title="Karta zgłoszeniowa (DOC)"
            link="https://katolikchorzow-my.sharepoint.com/:w:/g/personal/it_katolik-chorzow_edu_pl/EaDmZDn_ftxDn8lVW9F7hEoB0dwvNrmFn6wp6dtjsJeO6g?e=h45q7R"
          />
          <FileBlock
            title="Klauzula informacyjna o przetwarzaniu danych osobowych (PDF)"
            link="https://katolik-chorzow.edu.pl/wp-content/uploads/2021/05/klauzula_przetwarzanie_danych.pdf"
          />
        </Flex>
      </Container>
    </Layout>
  );
}
