import {
  fa1,
  fa2,
  fa3,
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faBold,
  faCode,
  faHeading,
  faItalic,
  faLink,
  faListUl,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonWithIcon } from "../ButtonWithIcon";

import { StyledHeader, StyledSpan } from "./style";

interface RichTextButtonsProps {
  transformInHeadingOneElement: () => void;
  transformInHeadingTwoElement: () => void;
  transformInHeadingThreeElement: () => void;
  transformInBoldText: () => void;
  transformInItalicText: () => void;
  transformInUnderLineText: () => void;
  transformInCodeElement: () => void;
  transformInUnorderedListElement: () => void;
  setElementAlign: (direction: "left" | "center" | "right") => void;
  transformInLinkElement: () => void;
}

export function RickTextButtons(props: RichTextButtonsProps) {
  return (
    <StyledHeader>
      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faHeading}
          secondIcon={fa1}
          size="lg"
          onClick={props.transformInHeadingOneElement}
          title="Heading One"
        />
        <ButtonWithIcon
          firstIcon={faHeading}
          secondIcon={fa2}
          size="lg"
          onClick={props.transformInHeadingTwoElement}
          title="Heading Two"
        />
        <ButtonWithIcon
          firstIcon={faHeading}
          secondIcon={fa3}
          size="lg"
          onClick={props.transformInHeadingThreeElement}
          title="Heading Three"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faBold}
          size="lg"
          onClick={props.transformInBoldText}
          title="Bold"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faItalic}
          size="lg"
          onClick={props.transformInItalicText}
          title="Italic"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faUnderline}
          size="lg"
          onClick={props.transformInUnderLineText}
          title="Underline"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faCode}
          size="lg"
          onClick={props.transformInCodeElement}
          title="Code"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faListUl}
          size="lg"
          onClick={props.transformInUnorderedListElement}
          title="Unordered List"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faAlignLeft}
          size="lg"
          onClick={() => props.setElementAlign("left")}
          title="Align Left"
        />
        <ButtonWithIcon
          firstIcon={faAlignCenter}
          size="lg"
          onClick={() => props.setElementAlign("center")}
          title="Align Center"
        />
        <ButtonWithIcon
          firstIcon={faAlignRight}
          size="lg"
          onClick={() => props.setElementAlign("right")}
          title="Align Right"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={false}>
        <ButtonWithIcon
          firstIcon={faLink}
          size="lg"
          onClick={props.transformInLinkElement}
          title="Align Left"
        />
      </StyledSpan>
    </StyledHeader>
  );
}
