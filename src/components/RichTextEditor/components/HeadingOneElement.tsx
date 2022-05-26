import { RenderElementProps } from "slate-react";

export function HeadingOneElement(props: RenderElementProps) {
  return (
    <h1 {...props.attributes} style={{ textAlign: props.element.align }}>
      {props.children}
    </h1>
  );
}
