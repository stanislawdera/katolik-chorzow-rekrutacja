import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { StyledArrowLink } from "./ArrowLink.styles";

export default function ArrowLink({
  children,
  size = "sm",
  href = "/",
  color,
}) {
  return (
    <Link href={href} passHref>
      <StyledArrowLink size={size} color={color}>
        {children}
        <Icon path={mdiArrowRight} className="arrow" color={color} />
      </StyledArrowLink>
    </Link>
  );
}
