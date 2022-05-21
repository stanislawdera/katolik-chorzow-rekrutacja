import styled from "styled-components";

export const StyledFileBlock = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.blueDark};
  border-radius: 5px;
  color: white;
  width: 100%;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  ${({ theme }) => theme.media.desktop} {
    width: calc(50% - ${({ theme }) => theme.spacing.md});
  }
`;
