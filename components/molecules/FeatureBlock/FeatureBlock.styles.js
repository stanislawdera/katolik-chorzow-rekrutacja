import { StyledArrowLink } from "components/atoms/ArrowLink/ArrowLink.styles";
import styled from "styled-components";

export const FeatureBlock = styled.div`
  background-color: ${({ theme, color }) =>
    color != undefined ? theme.colors[color] : theme.colors.red};
  padding: ${({ theme }) => theme.spacing.lg};
  color: white;
  display: flex;
  flex-direction: column;

  h3 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  ${StyledArrowLink} {
    margin-top: auto;
  }

  ${({ theme }) => theme.media.desktop} {
    background-image: url("/assets/${({ asset }) => asset}.png");
    background-repeat: no-repeat;
    background-position-y: center;
    background-size: contain;
  }
`;
