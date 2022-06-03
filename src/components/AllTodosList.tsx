import { default as __RenderIf } from "../styles/mame-styled/core/utils/js-syntax/If";
import type { SetTodoData, TodosData } from "../types";
import Todo from "./Todo";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  searchTodoInputValue: string;
}

export default function AllTodoList({ SET_TODO_DATA, TODOS_DATA, searchTodoInputValue }: Props) {
  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue === ""}>
      {TODOS_DATA.map(((data, index) => 
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
