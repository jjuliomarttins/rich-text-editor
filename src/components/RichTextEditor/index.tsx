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

  function transformInHeadingOneElement() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "h1",
    });

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "h1" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function transformInHeadingTwoElement() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "h2",
    });

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "h2" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function transformInHeadingThreeElement() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "h3",
    });

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "h3" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function transformInBoldText() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.bold === true,
    });

    Transforms.setNodes(
      editor,
      { bold: match ? false : true },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function transformInItalicText() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.italic === true,
    });

    Transforms.setNodes(
      editor,
      { italic: match ? false : true },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function transformInUnderLineText() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.underline === true,
    });

    Transforms.setNodes(
      editor,
      { underline: match ? false : true },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function transformInCodeElement() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "code",
    });

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function transformInUnorderedListElement() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "ul",
    });

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "ul" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function setElementAlign(direction: "left" | "center" | "right") {
    Transforms.setNodes(
      editor,
      { align: direction },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function transformInLinkElement() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "link",
    });

    let link = prompt("What's the URL?");

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "link", url: `https://${link}` },
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
        transformInHeadingOneElement={transformInHeadingOneElement}
        transformInHeadingTwoElement={transformInHeadingTwoElement}
        transformInHeadingThreeElement={transformInHeadingThreeElement}
        transformInCodeElement={transformInCodeElement}
        transformInBoldText={transformInBoldText}
        transformInItalicText={transformInItalicText}
        transformInUnderLineText={transformInUnderLineText}
        transformInUnorderedListElement={transformInUnorderedListElement}
        setElementAlign={setElementAlign}
        transformInLinkElement={transformInLinkElement}
      />
      <Slate editor={editor} value={initialValue}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
      </Slate>
    </StyledMain>
  );
}
