import { RenderElementProps } from "slate-react";

export function HeadingThreeElement(props: RenderElementProps) {
  return (
    <h3
      {...props.attributes}
      style={{
        textAlign: props.element.align,
      }}
    >
      {props.children}
    </h3>
  );
}
