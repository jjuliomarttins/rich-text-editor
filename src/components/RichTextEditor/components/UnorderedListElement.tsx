import { RenderElementProps } from "slate-react";

export function UnorderedListElement(props: RenderElementProps) {
  return (
    <ul {...props.attributes}>
      <li>{props.children}</li>
    </ul>
  );
}
