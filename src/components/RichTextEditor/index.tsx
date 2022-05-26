import { useCallback, useMemo } from "react";
import {
  BaseEditor,
  Descendant,
  createEditor,
  Editor,
  Element,
  Transforms,
  Text,
} from "slate";
import {
  ReactEditor,
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import { RickTextButtons } from "../RichTextButtons";

import { CodeElement } from "./components/CodeElement";
import { DefaultElement } from "./components/DefaultElement";
import { HeadingOneElement } from "./components/HeadingOneElement";
import { HeadingThreeElement } from "./components/HeadingThreeElement";
import { HeadingTwoElement } from "./components/HeadingTwoElement";
import { Leaf } from "./components/Leaf";
import { LinkElement } from "./components/LinkElement";
import { UnorderedListElement } from "./components/UnorderedListElement";

import { StyledMain } from "./style";

export type CustomElement = {
  type: "paragraph" | "code" | "h1" | "h2" | "h3" | "ul" | "link";
  children: CustomText[];
  align: "left" | "center" | "right";
  url?: string | null;
};

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
    align: "left",
  },
];

export function RichTextEditor() {
  const editor = useMemo(() => withReact(createEditor()), []);

  function transformElementIn(
    thisElement: "h1" | "h2" | "h3" | "code" | "ul" | "link"
  ) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === thisElement,
    });

    if (thisElement === "link") {
      Transforms.setNodes(
        editor,
        {
          type: match ? "paragraph" : thisElement,
          url: prompt("What's the URL?"),
        },
        { match: (n) => Editor.isBlock(editor, n) }
      );
    } else {
      Transforms.setNodes(
        editor,
        {
          type: match ? "paragraph" : thisElement,
        },
        { match: (n) => Editor.isBlock(editor, n) }
      );
    }
  }

  function transformTextStyleIn(thisStyle: "bold" | "italic" | "underline") {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n[thisStyle] === true,
    });

    Transforms.setNodes(
      editor,
      { [thisStyle]: match ? false : true },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function changeElementAlignTo(direction: "left" | "center" | "right") {
    Transforms.setNodes(
      editor,
      { align: direction },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "h1": {
        return <HeadingOneElement {...props} />;
      }
      case "h2": {
        return <HeadingTwoElement {...props} />;
      }
      case "h3": {
        return <HeadingThreeElement {...props} />;
      }
      case "code": {
        return <CodeElement {...props} />;
      }
      case "ul": {
        return <UnorderedListElement {...props} />;
      }
      case "link": {
        return <LinkElement {...props} />;
      }
      default: {
        return <DefaultElement {...props} />;
      }
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <StyledMain>
      <RickTextButtons
        transformElementIn={transformElementIn}
        transformTextStyleIn={transformTextStyleIn}
        changeElementAlignTo={changeElementAlignTo}
      />
      <Slate editor={editor} value={initialValue}>
        <Editable
          onKeyDown={(event) => {
            if (!event.ctrlKey) return;

            switch (event.key) {
              case "b": {
                event.preventDefault();
                transformTextStyleIn("bold");
                break;
              }
              case "i": {
                event.preventDefault();
                transformTextStyleIn("italic");
                break;
              }
              case "u": {
                event.preventDefault();
                transformTextStyleIn("underline");
                break;
              }
              case "c": {
                event.preventDefault();
                transformElementIn("code");
                break;
              }
              case "k": {
                event.preventDefault();
                transformElementIn("link");
                break;
              }
            }

            if (!event.altKey) return;

            switch (event.key) {
              case "¹": {
                event.preventDefault();
                transformElementIn("h1");
                break;
              }
              case "²": {
                event.preventDefault();
                transformElementIn("h2");
                break;
              }
              case "³": {
                event.preventDefault();
                transformElementIn("h3");
                break;
              }
              case "u": {
                event.preventDefault();
                transformElementIn("ul");
                break;
              }
            }
          }}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
    </StyledMain>
  );
}
