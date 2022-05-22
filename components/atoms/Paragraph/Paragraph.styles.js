import styled from "styled-components";
import { spacer } from "styles/spacer";

export const Paragraph = styled.p`
  ${spacer};
  line-height: 1.2;
  color: ${({ color, theme }) => (color ? theme.colors[color] : "black")};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  padding-top: ${({ theme, paddingTop }) =>
    paddingTop ? theme.spacing[paddingTop] : "0"};
`;
