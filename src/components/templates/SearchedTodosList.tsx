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
  const searchedData = (data: TodosData) => {
    return data.title.toLowerCase().includes(searchTodoInputValue);
  };
  
  const listSearchedData = TODOS_DATA.filter(todo => todo.title.toLowerCase().includes(searchTodoInputValue) && todo.archived === false);

  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue !== ""}>
      {TODOS_DATA.map(((todo) => 
        <__RenderIf is={todo.archived === false && searchedData(todo)} key={todo.id}>
          <Todo 
            {...todo as TodosData} 
            SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
            TODOS_DATA={TODOS_DATA} 
          />
        </__RenderIf>
      ))}
    </__RenderIf>
    <__RenderIf is={listSearchedData.length === 0 && searchTodoInputValue !== ""}>
      <P>There is no todo searched to show</P>
    </__RenderIf>
  </>;
}
