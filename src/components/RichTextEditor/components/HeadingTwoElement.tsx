import { RenderElementProps } from "slate-react";

export function HeadingTwoElement(props: RenderElementProps) {
  return (
    <h2
      {...props.attributes}
      style={{
        textAlign: props.element.align,
      }}
    >
      {props.children}
    </h2>
  );
}
