import styled from "styled-components";

export const StyledArrowLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ size, theme }) =>
    size ? theme.fontSizes[size] : theme.fontSizes.sm};

  svg {
    width: ${({ size, theme }) =>
      size ? theme.fontSizes[size] : theme.fontSizes.sm};
    vertical-align: middle;
    transition: transform 0.3s ease-in-out;
    margin-left: ${({ size, theme }) =>
      size ? `calc(${theme.fontSizes[size]} / 4)` : theme.fontSizes.sm};
  }

  :hover {
    svg {
      transform: translateX(5px);
    }
  }
`;
