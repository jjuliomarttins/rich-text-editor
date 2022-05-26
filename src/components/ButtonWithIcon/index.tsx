import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./style";

interface ButtonProps {
  firstIcon: IconProp;
  secondIcon?: IconProp;
  size: SizeProp;
  onClick?: () => void;
  title: string;
}

export function ButtonWithIcon(props: ButtonProps) {
  return (
    <StyledButton onClick={props.onClick} title={props.title}>
      <FontAwesomeIcon icon={props.firstIcon} size={props.size} />
      {props.secondIcon ? (
        <FontAwesomeIcon icon={props.secondIcon} size={props.size} />
      ) : null}
    </StyledButton>
  );
}
