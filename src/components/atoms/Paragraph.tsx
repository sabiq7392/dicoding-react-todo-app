import type { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import { P } from "../../styles/mame-styled/core/HtmlTag";
import { HTMLTag } from "../../styles/mame-styled/core/utils/types";

interface Props extends HTMLTag {
  text: string;
}

export default function Paragraph({ text, cssXs, ...props }: Props): ReactElement {
  const cssParent: CSSProperties = {
    fontFamily: "'ABeeZee', sans-serif", 
    lineHeight: "175%",
    ...cssXs as object,
  };

  return <P {...props} cssXs={cssParent}>{text}</P>;
}
