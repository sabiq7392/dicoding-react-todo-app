import type { ReactElement } from "react";
import Todo from "../molecules/Todo";
import type { SetArchivedTodosData, SetTodoData, TodosData } from "../../types";

interface Props {
  TODOS_DATA: TodosData[];
  ARCHIVED_TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  SET_ARCHIVED_TODOS_DATA: SetArchivedTodosData;
}

export default function ArchivedTodosList({ 
  ARCHIVED_TODOS_DATA, 
  SET_TODO_DATA, 
  SET_ARCHIVED_TODOS_DATA, 
  TODOS_DATA 
}: Props): ReactElement {
  return <>
    {ARCHIVED_TODOS_DATA.map((data: { title: string }, index) => 
      <Todo 
        {...data as TodosData} 
        SET_TODO_DATA={SET_TODO_DATA}
        SET_ARCHIVED_TODOS_DATA={SET_ARCHIVED_TODOS_DATA}
        TODOS_DATA={TODOS_DATA} 
        key={index} 
        ARCHIVED_TODOS_DATA={ARCHIVED_TODOS_DATA}
      />
    )}
  </>;
}
