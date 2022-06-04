import type { ReactElement } from "react";
import { Section, P, Small, Button, H3 } from "../../styles/mame-styled/core/HtmlTag";
import { default as __RenderIf } from "../../styles/mame-styled/core/utils/js-syntax/If";
import type { Id, SetArchivedTodosData, SetTodoData, TodosData } from "../../types";
import Title from "../atoms/Title";

interface Props extends TodosData {
  SET_TODO_DATA: SetTodoData;
  SET_ARCHIVED_TODOS_DATA: SetArchivedTodosData;
  TODOS_DATA: TodosData[];
}

export default function Todo({ 
  id, 
  title, 
  body, 
  createdAt, 
  archived, 
  SET_TODO_DATA, 
  SET_ARCHIVED_TODOS_DATA,
  TODOS_DATA,
}: Props): ReactElement {
  const findIndexTodo = (id: Id) =>TODOS_DATA.findIndex(todo => todo.id === id);

  const deleteTodo = (id: Id) => {
    SET_TODO_DATA(TODOS_DATA.splice(findIndexTodo(id), 1));

    console.log(TODOS_DATA);
    console.log({ message: "successfully deleted todo" });
  };

  const archiveTodo = (id: Id) => {
    TODOS_DATA[findIndexTodo(id)].archived = true;
    
    const archivedTodos = TODOS_DATA.filter(todo => todo.archived === true);
    SET_ARCHIVED_TODOS_DATA(archivedTodos as []);

    console.log(archivedTodos);
    console.log({ message: "successfully archived todo" });
  };
  
  const onDeleteClickHandler = () => {
    deleteTodo(id);
  };

  const onArchiveClickHandler = () => {
    archiveTodo(id);
  };

  return <>
    <Section aria-current={archived}>
      <Title as={H3} text={title} />
      <P>{body}</P>
      <Small>{createdAt}</Small>
      <Button onClick={onDeleteClickHandler}>Delete</Button>
      <Button onClick={onArchiveClickHandler}>
        {archived === false ? "Archived" : "Unarchived"}
      </Button>
    </Section>
  </>;
}
