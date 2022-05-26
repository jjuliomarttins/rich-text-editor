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
  transformElementIn: (
    thisElement: "h1" | "h2" | "h3" | "code" | "ul" | "link"
  ) => void;
  transformTextStyleIn: (thisStyle: "bold" | "italic" | "underline") => void;
  changeElementAlignTo: (direction: "left" | "center" | "right") => void;
}

export function RickTextButtons(props: RichTextButtonsProps) {
  return (
    <StyledHeader>
      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faHeading}
          secondIcon={fa1}
          size="lg"
          onClick={() => props.transformElementIn("h1")}
          title="Heading One | Ctrl + Alt + 1"
        />
        <ButtonWithIcon
          firstIcon={faHeading}
          secondIcon={fa2}
          size="lg"
          onClick={() => props.transformElementIn("h2")}
          title="Heading Two | Ctrl + Alt + 2"
        />
        <ButtonWithIcon
          firstIcon={faHeading}
          secondIcon={fa3}
          size="lg"
          onClick={() => props.transformElementIn("h3")}
          title="Heading Three | Ctrl + Alt + 3"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faBold}
          size="lg"
          onClick={() => props.transformTextStyleIn("bold")}
          title="Bold | Ctrl + B"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faItalic}
          size="lg"
          onClick={() => props.transformTextStyleIn("italic")}
          title="Italic | Ctrl + I"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faUnderline}
          size="lg"
          onClick={() => props.transformTextStyleIn("underline")}
          title="Underline | Ctrl + U"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faCode}
          size="lg"
          onClick={() => props.transformElementIn("code")}
          title="Code | Ctrl + C"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faListUl}
          size="lg"
          onClick={() => props.transformElementIn("ul")}
          title="Unordered List | Ctrl + Alt + U"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={true}>
        <ButtonWithIcon
          firstIcon={faAlignLeft}
          size="lg"
          onClick={() => props.changeElementAlignTo("left")}
          title="Align Left"
        />
        <ButtonWithIcon
          firstIcon={faAlignCenter}
          size="lg"
          onClick={() => props.changeElementAlignTo("center")}
          title="Align Center"
        />
        <ButtonWithIcon
          firstIcon={faAlignRight}
          size="lg"
          onClick={() => props.changeElementAlignTo("right")}
          title="Align Right"
        />
      </StyledSpan>

      <StyledSpan hasRightBorder={false}>
        <ButtonWithIcon
          firstIcon={faLink}
          size="lg"
          onClick={() => props.transformElementIn("link")}
          title="Link | Ctrl + K"
        />
      </StyledSpan>
    </StyledHeader>
  );
}
