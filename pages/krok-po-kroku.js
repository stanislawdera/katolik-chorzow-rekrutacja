import { Box } from "components/atoms/Box/Box.styles";
import { Container } from "components/atoms/Container/Container.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import DateBlock from "components/molecules/DateBlock/DateBlock";
import { Header } from "components/molecules/Header/Header.styles";
import Layout from "components/organisms/Layout/Layout";
import Head from "next/head";

export default function StepByStepPage() {
  return (
    <Layout>
      <Head>
        <title>Krok po kroku - Rekrutacja Katolik Chorzów</title>
      </Head>
      <Header>
        <h1>Rekrutacja krok po kroku</h1>
      </Header>
      <Container>
        <Paragraph>
          Na tej stronie znajdziesz spis najważniejszych dat związanych z
          rekrutacją do Katolika oraz sporo przydatnych informacji.
        </Paragraph>
        <Box green>
          W systemie rekrutacji elektronicznej Katolik widnieje pod nazwą{" "}
          <i>Publiczne Liceum Katolickie.</i>
        </Box>
        <DateBlock
          deadline="16 maja - 20 czerwca 15:00"
          description="Składanie wniosków w systemie elektronicznym oraz dostarczanie karty zgłoszeniowej do sekretariatu Katolika."
          link="https://katolikchorzow-my.sharepoint.com/:b:/g/personal/it_katolik-chorzow_edu_pl/EWvqcdxxSy9KgQeG3ArMaGkB5sP08nUijQJpwEObK14Gmw?e=wZ08qN"
          linkDescription="Pobierz kartę zgłoszeniową"
        />
        <Box green>
          Kartę zgłoszeniową należy złożyć w sekretariacie Katolika niezależnie
          od tego czy jest on Twoją szkołą pierwszego wyboru.
        </Box>
        <DateBlock
          deadline="24 czerwca - 13 lipca 15.00"
          description="Dostarczanie potwierdzonych kopii lub oryginałów świadectw ukończenia szkoły podstawowej i zaświadczeń o szczegółowych wynikach egzaminu ósmoklasisty przez kandydatów do szkoły pierwszego wyboru."
        />
        <DateBlock
          deadline="20 lipca"
          description="Ogłoszenie listy kandydatów zakwalifikowanych do liceum."
        />
        <Box green>
          Kwalifikacja nie jest równoznaczna z przyjęciem, należy jeszcze
          potwierdzić wolę.
        </Box>
        <DateBlock
          deadline="21 lipca - 28 lipca 15.00"
          description="Potwierdzenie woli uczęszczania do wybranej szkoły przez kandydata."
        />
        <DateBlock
          deadline="29 lipca"
          description="Ogłoszenie listy uczniów ostatecznie przyjętych do liceum."
        />
        <Box green>
          Powyżej przedstawiono tylko najważniejsze daty. Informacje dotyczące
          postępowania uzupełniającego znajdują się w regulaminie rekrutacji
          (zakładka Dokumenty)
        </Box>
      </Container>
    </Layout>
  );
}
