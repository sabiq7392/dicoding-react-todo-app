import type { ReactElement } from "react";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";
import { Small } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  text: string;
  ifIs: any;
}

export default function InputErrorMessage({ text, ifIs }: Props): ReactElement {
  return <>
    <__If is={ifIs}>
      <Small>{text}</Small>
    </__If>
  </>;
}
