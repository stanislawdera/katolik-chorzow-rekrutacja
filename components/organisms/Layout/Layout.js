import Navbar from "components/molecules/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import { theme } from "styles/theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <nav>
        <Navbar />
      </nav>
      {children}
    </ThemeProvider>
  );
}
