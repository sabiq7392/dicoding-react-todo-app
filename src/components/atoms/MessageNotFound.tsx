import type { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import { P } from "../../styles/mame-styled/core/HtmlTag";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";
import STYLES_CONFIG from "../../styles/styles.config";

const { color } = STYLES_CONFIG;

interface Props {
  text: string;
  ifIs: any;
}

export default function MessageNotFound({ text, ifIs }: Props): ReactElement {
  const cssXs: CSSProperties = {
    color: color.warning,
  };

  return <>
    <__If is={ifIs}>
      <P cssXs={cssXs}>{text}</P>
    </__If>
  </>;
} 
