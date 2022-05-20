import { StyledReasonBlockWrapper } from "./ReasonBlock.styles";

export default function ReasonBlock({ title, icon, onClick = () => {} }) {
  return (
    <StyledReasonBlockWrapper>
      {icon}
      <h4>{title}</h4>
    </StyledReasonBlockWrapper>
  );
}
