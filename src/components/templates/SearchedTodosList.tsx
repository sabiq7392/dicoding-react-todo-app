import { Fragment, ReactElement } from "react";
import type { SearchTodoInputValue, ChangedTransaction, TodosData } from "../../types";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";
import Todo from "../molecules/Todo";
import { Article, H2, P } from "../../styles/mame-styled/core/HtmlTag";
import Title from "../atoms/Title";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function SearchedTodosList({ TODOS_DATA, searchTodoInputValue, SET_CHANGED_TRANSACTION }: Props): ReactElement {
  const searchedTodos = (data: TodosData) => {
    return data.title.toLowerCase().includes(searchTodoInputValue);
  };
  
  const getAllSearchedTodos = TODOS_DATA.filter(todo => todo.title.toLowerCase().includes(searchTodoInputValue) && todo.archived === false);
  const lookingForTodos = searchTodoInputValue !== "";
  const noSearchedTodos = getAllSearchedTodos.length === 0;
  const todosDataExists = TODOS_DATA.length > 0;

  return <> 
    <__If is={lookingForTodos}>
      <Article aria-label="searched todos">
        <Title as={H2} text="Searched Todos" />

        <__If is={todosDataExists}>
          {TODOS_DATA.map(((todo) => 
            <__If is={searchedTodos(todo)} key={todo.id}>
              <Todo 
                {...todo as TodosData} 
                SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
                TODOS_DATA={TODOS_DATA} 
              />
            </__If>
          ))}
        </__If>

        <__If is={noSearchedTodos}>
          <P>There is no todo searched to show</P>
        </__If>
      </Article>
    </__If>
  </>;
}
