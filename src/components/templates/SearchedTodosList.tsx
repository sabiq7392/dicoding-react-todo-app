import { Fragment, ReactElement } from "react";
import type { SearchTodoInputValue, ChangedTransaction, TodosData } from "../../types";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import Todo from "../molecules/Todo";
import { P } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function SearchedTodosList({ TODOS_DATA, searchTodoInputValue, SET_CHANGED_TRANSACTION }: Props): ReactElement {
  const searchedTodos = (data: TodosData) => {
    return data.title.toLowerCase().includes(searchTodoInputValue);
  };
  
  const getAllSearchedTodos = TODOS_DATA.filter(todo => todo.title.toLowerCase().includes(searchTodoInputValue) && todo.archived === false);
  const lookingForTodos = searchTodoInputValue !== "";
  const noSearchedTodos = getAllSearchedTodos.length === 0;
  const todosDataExists = TODOS_DATA.length > 0;
  
  return <> 
    <__RenderIf is={todosDataExists && lookingForTodos}>
      {TODOS_DATA.map(((todo) => 
        <__RenderIf is={todo.archived === false && searchedTodos(todo)} key={todo.id}>
          <Todo 
            {...todo as TodosData} 
            SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
            TODOS_DATA={TODOS_DATA} 
          />
        </__RenderIf>
      ))}
    </__RenderIf>
    <__RenderIf is={noSearchedTodos && lookingForTodos}>
      <P>There is no todo searched to show</P>
    </__RenderIf>
  </>;
}
