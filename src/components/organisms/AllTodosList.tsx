import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import type { SearchTodoInputValue, SetArchivedTodosData, SetTodoData, TodosData } from "../../types";
import Todo from "../molecules/Todo";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  SET_ARCHIVED_TODOS_DATA: SetArchivedTodosData,
  searchTodoInputValue: SearchTodoInputValue;
  ARCHIVED_TODOS_DATA: TodosData[];
}

export default function AllTodosList({ 
  SET_TODO_DATA, 
  TODOS_DATA, 
  searchTodoInputValue, 
  SET_ARCHIVED_TODOS_DATA,
  ARCHIVED_TODOS_DATA,
}: Props) {
  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue === ""}>
      {TODOS_DATA.map(((todo, index) => 
        <__RenderIf is={todo.archived === false} key={index}>
          <Todo 
            {...todo as TodosData} 
            SET_TODO_DATA={SET_TODO_DATA}
            TODOS_DATA={TODOS_DATA} 
            SET_ARCHIVED_TODOS_DATA={SET_ARCHIVED_TODOS_DATA}
            ARCHIVED_TODOS_DATA={ARCHIVED_TODOS_DATA}
          />
        </__RenderIf>
      ))}
    </__RenderIf>
  </>;
}
