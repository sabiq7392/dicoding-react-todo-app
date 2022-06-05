import { P } from "../../styles/mame-styled/core/HtmlTag";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import type { SearchTodoInputValue, SetTodoData, TodosData } from "../../types";
import Todo from "../molecules/Todo";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function AllTodosList({ SET_TODO_DATA, TODOS_DATA, searchTodoInputValue }: Props) {
  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue === ""}>
      {TODOS_DATA.map(((todo, index) => 
        <__RenderIf is={todo.archived === false} key={index}>
          <Todo 
            {...todo as TodosData} 
            SET_TODO_DATA={SET_TODO_DATA}
            TODOS_DATA={TODOS_DATA} 
          />
        </__RenderIf>
      ))}
    </__RenderIf>
    <__RenderIf is={TODOS_DATA.length === 0}>
      <P>There is no todos to show</P>
    </__RenderIf>
  </>;
}
