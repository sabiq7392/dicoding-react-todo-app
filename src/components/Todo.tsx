import type { ReactElement } from "react";
import { Section, H2, P, Small, Button } from "../styles/mame-styled/core/HtmlTag";
import type { SetTodoData, TodosData } from "../types";

interface Props extends TodosData {
  SET_TODO_DATA: SetTodoData;
  TODOS_DATA: TodosData[];
}

export default function Todo({ id, title, body, createdAt, archived, SET_TODO_DATA, TODOS_DATA }: Props): ReactElement {
  const deleteTodo = (id: string) => {
    const indexOfTodo = TODOS_DATA.findIndex(todo => todo.id === id);
    SET_TODO_DATA(TODOS_DATA.splice(indexOfTodo, 1));

    console.log(TODOS_DATA);
    console.log({ message: "successfully deleted todo" });
  };

  return <>
    <Section>
      <H2>{title}</H2>
      <P>{body}</P>
      <Small>{createdAt}</Small>
      <Button onClick={() => deleteTodo(id)}>Delete</Button>
    </Section>
  </>;
}
