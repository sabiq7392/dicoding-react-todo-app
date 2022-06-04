import type { ReactElement } from "react";
import { default as __RenderIf } from "../styles/mame-styled/core/utils/js-syntax/If";
import { Small } from "../styles/mame-styled/core/HtmlTag";

interface Props {
  text: string;
  ifIs: any;
}

export default function ErrorMessage({ text, ifIs }: Props): ReactElement {
  return <>
    <__RenderIf is={ifIs}>
      <Small>{text}</Small>
    </__RenderIf>
  </>;
}