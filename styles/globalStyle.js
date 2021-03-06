import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    line-height: 1;
  }
`;
