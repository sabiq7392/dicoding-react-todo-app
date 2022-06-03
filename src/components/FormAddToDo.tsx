import type { ReactElement, FormEvent } from "react";
import type { TodosData } from "../data/TODOS_DATA";
import type { SetTodoData } from "../types";
import { useState } from "react";
import { Form, Button, Input } from "../styles/mame-styled/core/HtmlTag";
import { AiOutlinePlus } from "react-icons/ai";
import STYLES_CONFIG from "../styles/styles.config";

interface Props {
  TODOS_DATA: TodosData[];
  SET_TODO_DATA: SetTodoData;
}

const { spacing } = STYLES_CONFIG;

export default function FormAddToDo({ TODOS_DATA, SET_TODO_DATA }: Props): ReactElement {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    SET_TODO_DATA(TODOS_DATA.push({
      id: new Date().toString(),
      title: titleValue,
      body: bodyValue,
      archived: false,
      createdAt: new Date().toString(),
    }));

    console.log(TODOS_DATA);
    console.log({ message: "successfully added todo" });
  };

  return <>
    <Form onSubmit={addTodo} cssXs={{ background: "#eee", border: "1px solid red", display: "flex", alignItems: "center", padding: spacing._3 }}>
      <Button type="submit">
        <AiOutlinePlus size={24} />
      </Button>
      <Input 
        required 
        placeholder="Todo title" 
        type="text" 
        onChange={(e) => setTitleValue(e.target.value)} 
      />
      <Input 
        placeholder="Todo body" 
        type="text" 
        onChange={(e) => setBodyValue(e.target.value)} 
      />
    </Form>
  </>;
}
