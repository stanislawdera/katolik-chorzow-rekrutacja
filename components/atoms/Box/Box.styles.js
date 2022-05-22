import styled from "styled-components";

export const Box = styled.div`
  background-color: ${({ theme, green = false }) =>
    green ? theme.colors.green : theme.colors.light};
  color: ${({ green = false }) => (green ? "white" : "black")};
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;
