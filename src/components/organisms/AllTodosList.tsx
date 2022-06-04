import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import type { SearchTodoInputValue, SetArchivedTodosData, SetTodoData, TodosData } from "../../types";
import Todo from "../molecules/Todo";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  SET_ARCHIVED_TODOS_DATA: SetArchivedTodosData,
  searchTodoInputValue: SearchTodoInputValue;
}

export default function AllTodoList({ SET_TODO_DATA, TODOS_DATA, searchTodoInputValue, SET_ARCHIVED_TODOS_DATA }: Props) {
  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue === ""}>
      {TODOS_DATA.map(((data, index) => 
        <__RenderIf is={data.archived === false} key={index}>
          <Todo 
            {...data as TodosData} 
            SET_TODO_DATA={SET_TODO_DATA}
            TODOS_DATA={TODOS_DATA} 
            SET_ARCHIVED_TODOS_DATA={SET_ARCHIVED_TODOS_DATA}
          />
        </__RenderIf>
      ))}
    </__RenderIf>
  </>;
}
