import type { ReactElement } from "react";
import { Small } from "../../styles/mame-styled/core/HtmlTag";
import { HTMLTag } from "../../styles/mame-styled/core/utils/types";

interface Props extends HTMLTag {
  text: string;
}

export default function Date({ text, ...props }: Props): ReactElement {
  return <Small {...props}>{text}</Small>;
}
