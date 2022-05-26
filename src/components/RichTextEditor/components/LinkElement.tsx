import { RenderElementProps } from "slate-react";

export function LinkElement(props: RenderElementProps) {
  return (
    <a
      href={
        props.element.url?.includes("https://")
          ? props.element.url
          : `https://${props.element.url}`
      }
      {...props.attributes}
    >
      {props.children}
    </a>
  );
}
