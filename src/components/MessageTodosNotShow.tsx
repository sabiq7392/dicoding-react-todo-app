import type { ReactElement } from "react";
import type { TodosData } from "../types";
import { default as __RenderIf } from "../styles/mame-styled/core/utils/js-syntax/If";
import { P } from "../styles/mame-styled/core/HtmlTag";

interface Props {
  TODOS_DATA: TodosData[];
  SEARCH_TODOS_DATA: never[];
}

export default function MessageTodosNotShow({ TODOS_DATA, SEARCH_TODOS_DATA }: Props): ReactElement {
  return <>
    <__RenderIf is={TODOS_DATA.length === 0 || SEARCH_TODOS_DATA.length === 0}>
      <P>There is no todos to show</P>
    </__RenderIf>
  </>;
}
