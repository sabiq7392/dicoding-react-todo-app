import type { ReactElement } from "react";
import { Article, H2, Small } from "../../styles/mame-styled/core/HtmlTag";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";
import type { SearchTodoInputValue, ChangedTransaction, TodosData } from "../../types";
import Title from "../atoms/Title";
import Todo from "../molecules/Todo";
import STYLES_CONFIG from "../../styles/styles.config";
import { CSSProp } from "styled-components";
import { Grid } from "../../styles/mame-styled/core/display/Grid";
import MessageNotFound from "../atoms/MessageNotFound";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

const { spacing } = STYLES_CONFIG;

export default function AllTodosList({ SET_CHANGED_TRANSACTION, TODOS_DATA, searchTodoInputValue }: Props): ReactElement {
  const getAllActiveTodos = TODOS_DATA.filter(todo => todo.archived === false);
  const activeTodosExists = getAllActiveTodos.length > 0;
  const noActiveTodosExists = getAllActiveTodos.length === 0;
  const todosDataExists = TODOS_DATA.length > 0;
  const noTodosData = TODOS_DATA.length === 0;
  const nothingToLookForTodos = searchTodoInputValue === "";

  const cssXs: { parent: CSSProp } = {
    parent: {
      display: "grid",
      gap: spacing._3,
    },
  };

  return <>
    <__If is={nothingToLookForTodos}>
      <Article cssXs={cssXs.parent}>
        <Title as={H2} text="Active Todos" />
        {activeTodosExists  && <Small>Total: {getAllActiveTodos.length}</Small>}
        <__If is={todosDataExists && nothingToLookForTodos}>
          <Grid gap={spacing._3} cols={"repeat(auto-fit, minmax(400px, 1fr))"}>
            {TODOS_DATA.map(((todo) => 
              <__If is={todo.archived === false} key={todo.id}>
                <Todo 
                  {...todo as TodosData} 
                  SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
                  TODOS_DATA={TODOS_DATA} 
                />
              </__If>
            ))}
          </Grid>
        </__If>

        <MessageNotFound ifIs={(noTodosData || noActiveTodosExists) && nothingToLookForTodos} text="There is no todos to show" />
      </Article>
    </__If>
  </>;
}
