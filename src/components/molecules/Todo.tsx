import type { ReactElement, FocusEvent } from "react";
import { Section, Small, Button, H3 } from "../../styles/mame-styled/core/HtmlTag";
import type { Id, ChangedTransaction, TodosData } from "../../types";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";

interface Props extends TodosData {
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  TODOS_DATA: TodosData[];
}

export default function Todo({ 
  id, 
  title, 
  body, 
  createdAt, 
  archived, 
  SET_CHANGED_TRANSACTION, 
  TODOS_DATA,
}: Props): ReactElement {
  const findIndexTodo = (id: Id) => TODOS_DATA.findIndex(todo => todo.id === id);

  const deleteTodo = (id: Id) => {
    SET_CHANGED_TRANSACTION(TODOS_DATA.splice(findIndexTodo(id), 1));
    localStorage.setItem("todos_data", JSON.stringify(TODOS_DATA));

    console.log(TODOS_DATA);
    console.log({ message: "successfully deleted todo" });
  };

  const archiveTodo = (id: Id) => {
    SET_CHANGED_TRANSACTION(() => {
      TODOS_DATA[findIndexTodo(id)].archived = true;
      return `archived: ${id}`; // this make re render
    });

    console.log({ message: "successfully archived todo" });
  };

  const unarchivedTodo = (id: Id) => {
    SET_CHANGED_TRANSACTION(() => {
      TODOS_DATA[findIndexTodo(id)].archived = false;
      return `unarchived: ${id}`; // this make re render
    });
    
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
    SET_CHANGED_TRANSACTION(TODOS_DATA[findIndexTodo(id)].title = (e.currentTarget.textContent as string));
    console.log(TODOS_DATA[findIndexTodo(id)]);
  };

  const onParagraphInputHandler = (e: FocusEvent<HTMLParagraphElement>) => {
    SET_CHANGED_TRANSACTION(TODOS_DATA[findIndexTodo(id)].body = (e.currentTarget.textContent as string));
    console.log(TODOS_DATA[findIndexTodo(id)]);
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
