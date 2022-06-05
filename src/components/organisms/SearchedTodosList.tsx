import { Fragment, ReactElement } from "react";
import type { SearchTodoInputValue, SetTodoData, TodosData } from "../../types";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import Todo from "../molecules/Todo";
import { P } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function SearchedTodosList({ TODOS_DATA, searchTodoInputValue, SET_TODO_DATA }: Props): ReactElement {
  const searchedData = (data: TodosData) => {
    return data.title.toLowerCase().includes(searchTodoInputValue);
  };
  
  return <>
    <__RenderIf is={TODOS_DATA.length > 0 && searchTodoInputValue !== ""}>
      {TODOS_DATA.map(((todo, index) => 
        <Fragment key={index}>
          <__RenderIf is={todo.archived === false && searchedData(todo)}>
            <Todo 
              {...todo as TodosData} 
              SET_TODO_DATA={SET_TODO_DATA}
              TODOS_DATA={TODOS_DATA} 
            />
          </__RenderIf>
          <__RenderIf is={searchedData(todo) === false && index === 1}>
            <P>There is no todo to show</P>
          </__RenderIf>
        </Fragment>
      ))}
    </__RenderIf>
  </>;
}
