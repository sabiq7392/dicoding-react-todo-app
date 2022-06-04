import type { ReactElement } from "react";
import type { SearchTodosData, TodosData } from "../../types";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import { P } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  TODOS_DATA: TodosData[];
  SEARCHED_TODOS_DATA: SearchTodosData;
}

export default function MessageTodosNotShow({ TODOS_DATA, SEARCHED_TODOS_DATA }: Props): ReactElement {
  return <>
    <__RenderIf is={TODOS_DATA.length === 0 || SEARCHED_TODOS_DATA.length === 0}>
      <P>There is no todos to show</P>
    </__RenderIf>
  </>;
}
