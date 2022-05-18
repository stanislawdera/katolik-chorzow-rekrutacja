import { FeatureBlock } from "components/molecules/FeatureBlock/FeatureBlock.styles";
import styled from "styled-components";

export const BlocksRow = styled.div`
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    ${FeatureBlock} {
      width: 50%;
    }
    ${FeatureBlock}:first-child {
      text-align: end;
    }
  }
`;
