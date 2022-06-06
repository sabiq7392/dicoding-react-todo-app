import type { ReactElement } from "react";
import { P } from "../../styles/mame-styled/core/HtmlTag";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import type { SearchTodoInputValue, ChangedTransaction, TodosData } from "../../types";
import Todo from "../molecules/Todo";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function AllTodosList({ SET_CHANGED_TRANSACTION, TODOS_DATA, searchTodoInputValue }: Props): ReactElement {
  const getAllActiveTodos = TODOS_DATA.filter(todo => todo.archived === false);
  const noActiveTodosExists = getAllActiveTodos.length === 0;
  const todosDataExists = TODOS_DATA.length > 0;
  const noTodosData = TODOS_DATA.length === 0;
  const nothingToLookForTodos = searchTodoInputValue === "";

  return <>
    <__RenderIf is={todosDataExists && nothingToLookForTodos}>
      {TODOS_DATA.map(((todo) => 
        <__RenderIf is={todo.archived === false} key={todo.id}>
          <Todo 
            {...todo as TodosData} 
            SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
            TODOS_DATA={TODOS_DATA} 
          />
        </__RenderIf>
      ))}
    </__RenderIf>
    <__RenderIf is={(noTodosData || noActiveTodosExists) && nothingToLookForTodos}>
      <P>There is no todo list to show</P>
    </__RenderIf>
  </>;
}
