import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  text-align: center;
  padding: calc(${({ theme }) => theme.spacing.xl} * 1.5)
    ${({ theme }) => theme.spacing.md};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: normal;
    ${({ theme }) => theme.media.desktop} {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
  }
`;
