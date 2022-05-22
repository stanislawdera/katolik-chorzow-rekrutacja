import styled from "styled-components";

export const StyledHeroHeader = styled.header`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;

  h1 {
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    padding-bottom: ${({ theme }) => theme.spacing.lg};
    font-weight: normal;
    line-height: 1.1;
  }

  ${({ theme }) => theme.media.desktop} {
    padding: calc(${({ theme }) => theme.spacing.xl} * 4);
    text-align: left;

    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      line-height: 1;
      padding-bottom: ${({ theme }) => theme.spacing.sm};
    }
  }
`;
