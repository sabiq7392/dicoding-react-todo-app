import { Fragment, ReactElement } from "react";
import type { SearchTodoInputValue, ChangedTransaction, TodosData } from "../../types";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";
import Todo from "../molecules/Todo";
import { Article, H2 } from "../../styles/mame-styled/core/HtmlTag";
import Title from "../atoms/Title";
import { Grid } from "../../styles/mame-styled/core/display/Grid";
import STYLES_CONFIG from "../../styles/styles.config";
import MessageNotFound from "../atoms/MessageNotFound";
import { CSSProp } from "styled-components";

const { spacing } = STYLES_CONFIG;

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

export default function SearchedTodosList({ TODOS_DATA, searchTodoInputValue, SET_CHANGED_TRANSACTION }: Props): ReactElement {
  const searchedTodos = (data: TodosData) => {
    return data.title.toLowerCase().includes(searchTodoInputValue);
  };
  
  const getAllSearchedTodos = TODOS_DATA.filter(todo => todo.title.toLowerCase().includes(searchTodoInputValue));
  const lookingForTodos = searchTodoInputValue !== "";
  const noSearchedTodos = getAllSearchedTodos.length === 0;
  const todosDataExists = TODOS_DATA.length > 0;

  const cssXs: { parent: CSSProp } = {
    parent: {
      display: "grid",
      gap: spacing._3,
    },
  };

  return <> 
    <__If is={lookingForTodos}>
      <Article aria-label="searched todos" cssXs={cssXs.parent}>
        <Title as={H2} text="Searched Todos" />

        <__If is={todosDataExists}>
          <Grid gap={spacing._3}>
            {TODOS_DATA.map(((todo) => 
              <__If is={searchedTodos(todo)} key={todo.id}>
                <Todo 
                  {...todo as TodosData} 
                  SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
                  TODOS_DATA={TODOS_DATA} 
                />
              </__If>
            ))}
          </Grid>
        </__If>

        <MessageNotFound ifIs={noSearchedTodos} text="There is no match todos" />
      </Article>
    </__If>
  </>;
}
