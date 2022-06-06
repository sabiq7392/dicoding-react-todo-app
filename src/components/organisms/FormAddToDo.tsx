import type { ReactElement, FormEvent, KeyboardEvent, ChangeEvent } from "react";
import type { ChangedTransaction, SearchTodoInputValue, TodosData } from "../../types";
import { useState } from "react";
import { Form, Button, Input, Small, Textarea } from "../../styles/mame-styled/core/HtmlTag";
import { AiOutlinePlus } from "react-icons/ai";
import STYLES_CONFIG from "../../styles/styles.config";
import MessageErrorInput from "../atoms/MessageInputError";
import { CSSProp } from "styled-components";
import GenericStyles from "../../styles/Generic.styled";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";
import { Grid } from "../../styles/mame-styled/core/display/Grid";

interface Props {
  TODOS_DATA: TodosData[];
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  searchTodoInputValue: SearchTodoInputValue;
}

const { spacing, color } = STYLES_CONFIG;

export default function FormAddTodo({ TODOS_DATA, SET_CHANGED_TRANSACTION, searchTodoInputValue }: Props): ReactElement {
  const [maxLengthTitle,] = useState(50); 
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [lengthTitle, setLengthTitle] = useState(maxLengthTitle);
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
    setLengthTitle(e.target.value.length <= 50 ? 50 - e.target.value.length : 0);
    handleErrorInputLengthExceed(e);
  };

  const onTitleKeyUpChangeHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    handleErrorInputLengthExceed(e);
  };

  const onBodyChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setBodyValue(e.target.value);
  };

  interface CssXs {
    form: CSSProp;
    button: CSSProp;
    title: CSSProp;
    body: CSSProp;
  }

  const cssXs: CssXs = {
    form: { 
      ...GenericStyles.todosCard,
      display: "flex", 
      alignItems: "center", 
      gap: spacing._3,
    },
    button: {
      ...GenericStyles.commonButtons,
      transform: `translateY(${spacing._6})`,
      display: "grid",
      alignSelf: "start",
      placeItems: "center",
      background: color.primary,
      ["svg"]: {
        fill: "white",
      },
    },
    title: {
      ...GenericStyles.commonInput,
      height: 44,
      width: "100%",
    },
    body: {
      ...GenericStyles.commonInput,
      height: 44,
    }
  };

  return <>
    <__If is={nothingToLookForTodos}>
      <Form onSubmit={onFormSubmitHandler} cssXs={cssXs.form}>
        <Button aria-labelledby="submit todo" type="submit" aria-label="add todo" cssXs={cssXs.button}>
          <AiOutlinePlus size={24} />
        </Button>
        <Grid gap={spacing._2} cssXs={{ width: "100%" }}>
          <Grid gap={spacing._1}>
            <Small cssXs={{ justifySelf: "end" }}>Remaining: {lengthTitle}</Small>
            <Input 
              required 
              placeholder="Todo title" 
              type="text" 
              onChange={onTitleChangeHandler}
              onKeyUp={onTitleKeyUpChangeHandler}
              cssXs={cssXs.title}
            />
            <MessageErrorInput ifIs={isLengthExceed} text={`max length character: ${maxLengthTitle}`} />
          </Grid>
          <Textarea
            placeholder="Todo body" 
            onChange={onBodyChangeHandler}
            cssXs={cssXs.body} 
          />
        </Grid>
      </Form>
    </__If>
  </>;
}

