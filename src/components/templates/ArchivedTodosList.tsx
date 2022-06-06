import type { ReactElement } from "react";
import Todo from "../molecules/Todo";
import type { ChangedTransaction, TodosData } from "../../types";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import { P } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
}

export default function ArchivedTodosList({ SET_CHANGED_TRANSACTION, TODOS_DATA }: Props): ReactElement {
  const getAllArchivedTodos = TODOS_DATA.filter(todo => todo.archived === true);
  const archivedTodosExists = getAllArchivedTodos.length > 0;
  const noArchivedTodos = getAllArchivedTodos.length === 0;

  return <>
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
  </>;
}
