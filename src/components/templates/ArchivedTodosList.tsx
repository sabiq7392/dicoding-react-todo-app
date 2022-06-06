import type { ReactElement } from "react";
import Todo from "../molecules/Todo";
import type { ChangedTransaction, SearchTodoInputValue, TodosData } from "../../types";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import { Article, P, H2 } from "../../styles/mame-styled/core/HtmlTag";
import Title from "../atoms/Title";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
  
}

export default function ArchivedTodosList({ SET_CHANGED_TRANSACTION, TODOS_DATA, searchTodoInputValue }: Props): ReactElement {
  const getAllArchivedTodos = TODOS_DATA.filter(todo => todo.archived === true);
  const archivedTodosExists = getAllArchivedTodos.length > 0;
  const noArchivedTodos = getAllArchivedTodos.length === 0;
  const nothingToLookForTodos = searchTodoInputValue === "";

  return <>
    <__RenderIf is={nothingToLookForTodos}>
      <Article aria-label="archived todos">
        <Title as={H2} text="Archived Todos" />

        <__RenderIf is={archivedTodosExists}>
          {TODOS_DATA.map((todo) => 
            <__RenderIf key={todo.id} is={todo.archived}>
              <Todo 
                {...todo as TodosData} 
                SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
                TODOS_DATA={TODOS_DATA} 
              />
            </__RenderIf>
          )}
        </__RenderIf>

        <__RenderIf is={noArchivedTodos}>
          <P>There is no todos to show</P>
        </__RenderIf>
      </Article>
    </__RenderIf>
  </>;
}
