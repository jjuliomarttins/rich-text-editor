import { RenderElementProps } from "slate-react";

export function LinkElement(props: RenderElementProps) {
  return (
    <a {...props.attributes} href={props.element.url || "https://"}>
      {props.children}
    </a>
  );
}
