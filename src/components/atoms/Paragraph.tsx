import type { ReactElement } from "react";
import { P } from "../../styles/mame-styled/core/HtmlTag";
import { HTMLTag } from "../../styles/mame-styled/core/utils/types";

interface Props extends HTMLTag {
  text: string;
}

export default function Paragraph({ text, ...props }: Props): ReactElement {
  return <P {...props}>{text}</P>;
}
