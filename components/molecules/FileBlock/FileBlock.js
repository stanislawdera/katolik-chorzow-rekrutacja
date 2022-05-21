import ArrowLink from "components/atoms/ArrowLink/ArrowLink";
import { StyledFileBlock } from "./FileBlock.styles";

export default function FileBlock({ title, link }) {
  return (
    <StyledFileBlock>
      <h2>{title}</h2>
      <ArrowLink href={link} newTab>
        Pobierz
      </ArrowLink>
    </StyledFileBlock>
  );
}
