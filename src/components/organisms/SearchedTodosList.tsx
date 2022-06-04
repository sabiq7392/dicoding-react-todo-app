import type { ReactElement } from "react";
import type { SearchTodoInputValue, SearchTodosData, SetArchivedTodosData, SetTodoData, TodosData } from "../../types";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import Todo from "../molecules/Todo";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  SEARCHED_TODOS_DATA: SearchTodosData;
  SET_ARCHIVED_TODOS_DATA: SetArchivedTodosData;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function SearchedTodosList({ 
  TODOS_DATA, 
  SEARCHED_TODOS_DATA, 
  searchTodoInputValue, 
  SET_TODO_DATA,
  SET_ARCHIVED_TODOS_DATA,
}: Props): ReactElement {
  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue !== ""}>
      {SEARCHED_TODOS_DATA.map(((data, index) => 
        <__RenderIf is={data.archived === false} key={index}>
          <Todo 
            {...data as TodosData} 
            SET_TODO_DATA={SET_TODO_DATA}
            SET_ARCHIVED_TODOS_DATA={SET_ARCHIVED_TODOS_DATA} 
            TODOS_DATA={TODOS_DATA} 
          />
        </__RenderIf>
      ))}
    </__RenderIf>
  </>;
}
