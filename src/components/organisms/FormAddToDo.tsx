import type { ReactElement, FormEvent, KeyboardEvent, ChangeEvent } from "react";
import type { ChangedTransaction, SearchTodoInputValue, TodosData } from "../../types";
import { useState } from "react";
import { Form, Button, Input, Div, Small } from "../../styles/mame-styled/core/HtmlTag";
import { AiOutlinePlus } from "react-icons/ai";
import STYLES_CONFIG from "../../styles/styles.config";
import InputErrorMessage from "../molecules/InputErrorMessage";
import { CSSProp } from "styled-components";
import GenericStyles from "../../styles/Generic.styled";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

const { spacing, color } = STYLES_CONFIG;

export default function FormAddTodo({ TODOS_DATA, SET_CHANGED_TRANSACTION, searchTodoInputValue }: Props): ReactElement {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [lengthTitle, setLengthTitle] = useState(50);
  const [isLengthExceed, setIsLengthExceed] = useState(false);
  const nothingToLookForTodos = searchTodoInputValue === "";

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

  const onFormSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    addTodo(e);
  };

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitleValue(e.target.value);
    setLengthTitle(e.target.value.length);
    handleErrorInputLengthExceed(e);
  };

  const onTitleKeyUpChangeHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    handleErrorInputLengthExceed(e);
  };

  const onBodyChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setBodyValue(e.target.value);
  };

  const cssXs: { form: CSSProp } = {
    form: { 
      ...GenericStyles.todosCard,
      display: "flex", 
      alignItems: "center", 
    },
  };

  return <>
    <__If is={nothingToLookForTodos}>
      <Form onSubmit={onFormSubmitHandler} cssXs={cssXs.form}>
        <Button aria-labelledby="submit todo" type="submit" aria-label="add todo">
          <AiOutlinePlus size={24} />
        </Button>
        <Div cssXs={{ display: "grid" }}>
          <Small>Remaining: {lengthTitle}</Small>
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
    </__If>
  </>;
}

