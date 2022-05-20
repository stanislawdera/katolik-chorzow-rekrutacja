import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md} 0;

  ${({ theme }) => theme.media.desktop} {
    width: ${({ wide }) => (wide ? "1000px" : "800px")};
    margin-left: auto;
    margin-right: auto;
  }
`;
