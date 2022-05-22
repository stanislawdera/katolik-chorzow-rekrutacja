import { Badge } from "components/atoms/Badge/Badge.styles";
import Link from "next/link";
import { StyledNavbar } from "./Navbar.styles";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">
        <Badge as="a">Rekrutacja 2022</Badge>
      </Link>
    </StyledNavbar>
  );
}
