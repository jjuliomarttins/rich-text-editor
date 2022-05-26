import { RenderElementProps } from "slate-react";

export function DefaultElement(props: RenderElementProps) {
  return (
    <p
      {...props.attributes}
      style={{
        textAlign: props.element.align,
      }}
    >
      {props.children}
    </p>
  );
}
