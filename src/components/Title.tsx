import type { ReactElement } from "react";
import { H1 } from "../styles/mame-styled/core/HtmlTag";

interface Props {
  text: string;
}

export default function Title({ text }: Props): ReactElement {
  return <H1>{text}</H1>;
}
