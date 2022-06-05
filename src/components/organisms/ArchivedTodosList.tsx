import type { ReactElement } from "react";
import Todo from "../molecules/Todo";
import type { SetTodoData, TodosData } from "../../types";
import If from "../../styles/mame-styled/core/utils/js-syntax/If";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
}

export default function ArchivedTodosList({ SET_TODO_DATA, TODOS_DATA }: Props): ReactElement {
  return <>
    {TODOS_DATA.map((todo, index) => 
      <If key={index} is={todo.archived}>
        <Todo 
          {...todo as TodosData} 
          SET_TODO_DATA={SET_TODO_DATA}
          TODOS_DATA={TODOS_DATA} 
          key={index} 
        />
      </If>
    )}
  </>;
}
