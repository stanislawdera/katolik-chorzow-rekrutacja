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
      background-position-x: 10%;
    }
    ${FeatureBlock}:nth-child(2) {
      background-position-x: 90%;
    }
  }
`;
