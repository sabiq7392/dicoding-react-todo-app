import type { ReactElement } from "react";
import { Section, P, Small, Button, H3 } from "../../styles/mame-styled/core/HtmlTag";
import type { Id, SetArchivedTodosData, SetTodoData, TodosData } from "../../types";
import Title from "../atoms/Title";

interface Props extends TodosData {
  SET_TODO_DATA: SetTodoData;
  SET_ARCHIVED_TODOS_DATA: SetArchivedTodosData;
  TODOS_DATA: TodosData[];
  ARCHIVED_TODOS_DATA: TodosData[];
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
  const findIndexTodo = (id: Id, data: TodosData[]) => data.findIndex(todo => todo.id === id);

  const deleteTodo = (id: Id) => {
    SET_TODO_DATA(TODOS_DATA.splice(findIndexTodo(id, TODOS_DATA), 1));

    console.log(TODOS_DATA);
    console.log({ message: "successfully deleted todo" });
  };

  const archiveTodo = (id: Id) => {
    SET_TODO_DATA(TODOS_DATA[findIndexTodo(id, TODOS_DATA)].archived = true);
    
    const archivedTodos = TODOS_DATA.filter(todo => todo.archived === true);
    SET_ARCHIVED_TODOS_DATA(archivedTodos as []);

    console.log({ message: "successfully archived todo" });
  };

  const unarchivedTodo = (id: Id) => {
    SET_TODO_DATA(TODOS_DATA[findIndexTodo(id, TODOS_DATA)].archived = false);
    
    const archivedTodos = TODOS_DATA.filter(todo => todo.archived === true);

    SET_ARCHIVED_TODOS_DATA(archivedTodos as []);
    console.log({ message: "successfully unarchived todo" });
  };
  
  const onDeleteClickHandler = () => {
    deleteTodo(id);
  };

  const onArchiveClickHandler = () => {
    if (archived === false) {
      return archiveTodo(id);
    }
    return unarchivedTodo(id);
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
