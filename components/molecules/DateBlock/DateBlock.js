import ArrowLink from "components/atoms/ArrowLink/ArrowLink";
import { Paragraph } from "components/atoms/Paragraph/Paragraph.styles";
import { StyledDateBlock } from "./DateBlock.styles";

export default function DateBlock({
  deadline = "",
  description = "",
  link = false,
  linkDescription = "Zobacz",
}) {
  return (
    <StyledDateBlock>
      <Paragraph color="greenDark" uppercase>
        {deadline}
      </Paragraph>
      <Paragraph>{description}</Paragraph>
      {link ? (
        <ArrowLink href={link} size="xs" color="greenDark">
          {linkDescription}
        </ArrowLink>
      ) : (
        <></>
      )}
    </StyledDateBlock>
  );
}
