import styled from "styled-components";

export const Heading = styled.h3`
  text-align: center;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;
