import { ReactElement, FormEvent, KeyboardEvent, ChangeEvent } from "react";
import type { ChangedTransaction, TodosData } from "../../types";
import { useState } from "react";
import { Form, Button, Input, Div } from "../../styles/mame-styled/core/HtmlTag";
import { AiOutlinePlus } from "react-icons/ai";
import STYLES_CONFIG from "../../styles/styles.config";
import InputErrorMessage from "../molecules/InputErrorMessage";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
}

const { spacing } = STYLES_CONFIG;

export default function FormAddTodo({ TODOS_DATA, SET_CHANGED_TRANSACTION }: Props): ReactElement {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [isLengthExceed, setIsLengthExceed] = useState(false);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLengthExceed) {
      alert("Title character length cannot more than 50");
    }

    if (isLengthExceed === false) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      SET_CHANGED_TRANSACTION(TODOS_DATA.push({
        id: new Date() as unknown as string,
        title: titleValue,
        body: bodyValue,
        archived: false,
        createdAt: new Date().toLocaleDateString("id-ID", options as any),
      }));

      console.log(TODOS_DATA);
      console.log({ message: "successfully added todo" });
    } 
  };

  const handleErrorInputLengthExceed = (e: KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>, limit = 50) => {
    if (e.currentTarget.value.length > limit) {
      e.currentTarget.style.outline = "1px solid red";
      setIsLengthExceed(true);
    } else {
      e.currentTarget.style.outline = "";
      setIsLengthExceed(false);
    }
  };

  const onFormSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    addTodo(e);
  };

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
    handleErrorInputLengthExceed(e);
  };

  const onTitleKeyUpChangeHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    handleErrorInputLengthExceed(e);
  };

  const onBodyChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setBodyValue(e.target.value);
  };

  return <>
    <Form onSubmit={onFormSubmitHandler} cssXs={{ background: "#eee", border: "1px solid red", display: "flex", alignItems: "center", padding: spacing._3 }}>
      <Button type="submit" aria-label="add todo">
        <AiOutlinePlus size={24} />
      </Button>
      <Div cssXs={{ display: "grid" }}>
        <Input 
          required 
          placeholder="Todo title" 
          type="text" 
          onChange={onTitleChangeHandler}
          onKeyUp={onTitleKeyUpChangeHandler}
        />
        <InputErrorMessage ifIs={isLengthExceed} text="max length character 50" />
      </Div>
      <Input 
        placeholder="Todo body" 
        type="text" 
        onChange={onBodyChangeHandler} 
      />
    </Form>
  </>;
}


