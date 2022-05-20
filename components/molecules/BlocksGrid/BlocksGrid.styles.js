import styled from "styled-components";
import { spacer } from "styles/spacer";

export const BlocksGrid = styled.div`
  ${spacer};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-x: scroll;
  align-items: stretch;

  ${({ theme }) => theme.media.desktop} {
    flex-wrap: wrap;
  }
`;
