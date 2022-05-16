import styled from "styled-components";

export const Badge = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 20px;
  width: fit-content;
`;
