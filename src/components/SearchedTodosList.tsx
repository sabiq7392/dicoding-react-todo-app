import type { ReactElement } from "react";
import type { SearchTodoInputValue, SearchTodosData, SetTodoData, TodosData } from "../types";
import { default as __RenderIf } from "../styles/mame-styled/core/utils/js-syntax/If";
import Todo from "./Todo";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  SEARCH_TODOS_DATA: SearchTodosData;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function SearchedTodosList({ TODOS_DATA, SEARCH_TODOS_DATA, searchTodoInputValue, SET_TODO_DATA }: Props): ReactElement {
  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue !== ""}>
      {SEARCH_TODOS_DATA.map(((data, index) => 
        <Todo 
          {...data as TodosData} 
          SET_TODO_DATA={SET_TODO_DATA} 
          TODOS_DATA={TODOS_DATA} 
          key={index} 
        />
      ))}
    </__RenderIf>
  </>;
}
