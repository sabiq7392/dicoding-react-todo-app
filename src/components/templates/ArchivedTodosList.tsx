import type { ReactElement } from "react";
import Todo from "../molecules/Todo";
import type { ChangedTransaction, SearchTodoInputValue, TodosData } from "../../types";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";
import { Article, H2, Small } from "../../styles/mame-styled/core/HtmlTag";
import Title from "../atoms/Title";
import MessageNotFound from "../atoms/MessageNotFound";
import { Grid } from "../../styles/mame-styled/core/display/Grid";
import STYLES_CONFIG from "../../styles/styles.config";
import { CSSProp } from "styled-components";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

const { spacing } = STYLES_CONFIG;

export default function ArchivedTodosList({ SET_CHANGED_TRANSACTION, TODOS_DATA, searchTodoInputValue }: Props): ReactElement {
  const getAllArchivedTodos = TODOS_DATA.filter(todo => todo.archived === true);
  const archivedTodosExists = getAllArchivedTodos.length > 0;
  const noArchivedTodos = getAllArchivedTodos.length === 0;
  const nothingToLookForTodos = searchTodoInputValue === "";

  const cssXs: { parent: CSSProp } = {
    parent: {
      display: "grid",
      gap: spacing._3,
    },
  };

  return <>
    <__If is={nothingToLookForTodos}>
      <Article aria-label="archived todos" cssXs={cssXs.parent}>
        <Title as={H2} text="Archived Todos" />
        {archivedTodosExists && <Small>Total: {getAllArchivedTodos.length}</Small>}
        <__If is={archivedTodosExists}>
          <Grid gap={spacing._3} cols={"repeat(auto-fit, minmax(400px, 1fr))"}>
            {TODOS_DATA.map((todo) => 
              <__If key={todo.id} is={todo.archived}>
                <Todo 
                  {...todo as TodosData} 
                  SET_CHANGED_TRANSACTION={SET_CHANGED_TRANSACTION}
                  TODOS_DATA={TODOS_DATA} 
                />
              </__If>
            )}
          </Grid>
        </__If>

        <MessageNotFound ifIs={noArchivedTodos} text="There is no archived todos to show" />
      </Article>
    </__If>
  </>;
}
