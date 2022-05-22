import styled from "styled-components";

export const StyledReasonBlockWrapper = styled.div`
  width: 220px;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;

  h4 {
    font-weight: normal;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  svg {
    width: 60%;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    path {
      fill: white;
    }
  }
`;
