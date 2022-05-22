import { Box } from "components/atoms/Box/Box.styles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import styled from "styled-components";

export const StyledDateBlock = styled(Box)`
  ${Paragraph} {
    padding-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;
