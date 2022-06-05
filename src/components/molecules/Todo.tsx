import type { ReactElement, FocusEvent } from "react";
import { Section, Small, Button, H3 } from "../../styles/mame-styled/core/HtmlTag";
import type { Id, SetTodoData, TodosData } from "../../types";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";

interface Props extends TodosData {
  SET_TODO_DATA: SetTodoData;
  TODOS_DATA: TodosData[];
}

export default function Todo({ 
  id, 
  title, 
  body, 
  createdAt, 
  archived, 
  SET_TODO_DATA, 
  TODOS_DATA,
}: Props): ReactElement {
  const findIndexTodo = (id: Id, data: TodosData[]) => data.findIndex(todo => todo.id === id);

  const deleteTodo = (id: Id) => {
    SET_TODO_DATA(TODOS_DATA.splice(findIndexTodo(id, TODOS_DATA), 1));
    localStorage.setItem("todos_data", JSON.stringify(TODOS_DATA));

    console.log(TODOS_DATA);
    console.log({ message: "successfully deleted todo" });
  };

  const archiveTodo = (id: Id) => {
    SET_TODO_DATA(TODOS_DATA[findIndexTodo(id, TODOS_DATA)].archived = true);

    console.log({ message: "successfully archived todo" });
  };

  const unarchivedTodo = (id: Id) => {
    SET_TODO_DATA(TODOS_DATA[findIndexTodo(id, TODOS_DATA)].archived = false);
    
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

  const onTitleInputHandler = (e: FocusEvent<HTMLHeadingElement>) => {
    SET_TODO_DATA(TODOS_DATA[findIndexTodo(id, TODOS_DATA)].title = (e.currentTarget.textContent as string));
    console.log(TODOS_DATA[findIndexTodo(id, TODOS_DATA)]);
  };

  const onParagraphInputHandler = (e: FocusEvent<HTMLParagraphElement>) => {
    SET_TODO_DATA(TODOS_DATA[findIndexTodo(id, TODOS_DATA)].body = (e.currentTarget.textContent as string));
    console.log(TODOS_DATA[findIndexTodo(id, TODOS_DATA)]);
  };

  return <>
    <Section aria-current={archived} aria-label={title}>
      <Title as={H3} text={title} onBlur={onTitleInputHandler} contentEditable suppressContentEditableWarning />
      <Paragraph text={body} onBlur={onParagraphInputHandler} contentEditable suppressContentEditableWarning />
      <Small>{createdAt}</Small>
      <Button onClick={onDeleteClickHandler}>Delete</Button>
      <Button onClick={onArchiveClickHandler}>
        {archived === false ? "Archived" : "Unarchived"}
      </Button>
    </Section>
  </>;
}
