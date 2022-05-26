import { RenderLeafProps } from "slate-react";

export function Leaf(props: RenderLeafProps) {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.text.bold ? "bold" : "normal",
        fontStyle: props.text.italic ? "italic" : "normal",
        textDecoration: props.text.underline ? "underline" : "none",
      }}
    >
      {props.children}
    </span>
  );
}
