import type { ReactElement } from "react";
import { Small } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  text: string;
}

export default function Date({ text }: Props): ReactElement {
  return <Small>{text}</Small>;
}
