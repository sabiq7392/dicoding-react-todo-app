import type { ReactElement, FocusEvent, MouseEvent } from "react";
import { CSSProp, CSSProperties } from "styled-components";
import GenericStyles from "../../styles/Generic.styled";
import { Flex } from "../../styles/mame-styled/core/display/Flex";
import { Section, Small, Button, H3 } from "../../styles/mame-styled/core/HtmlTag";
import STYLES_CONFIG from "../../styles/styles.config";
import type { Id, ChangedTransaction, TodosData } from "../../types";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import { CgTrashEmpty } from "react-icons/cg";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { default as __If } from "../../styles/mame-styled/core/utils/js-syntax/If";

interface Props extends TodosData {
  SET_CHANGED_TRANSACTION: ChangedTransaction;
  TODOS_DATA: TodosData[];
}

const { color, spacing } = STYLES_CONFIG;

export default function Todo({ 
  id, 
  title, 
  body, 
  createdAt, 
  archived, 
  SET_CHANGED_TRANSACTION, 
  TODOS_DATA,
}: Props): ReactElement {
  const findIndexTodo = (id: Id): number => TODOS_DATA.findIndex(todo => todo.id === id);
  const deleteTodo = (id: Id): void => {
    SET_CHANGED_TRANSACTION(TODOS_DATA.splice(findIndexTodo(id), 1));
    localStorage.setItem("todos_data", JSON.stringify(TODOS_DATA));

    console.log(TODOS_DATA);
    console.log({ message: "successfully deleted todo" });
  };

  const archiveTodo = (id: Id): void => {
    SET_CHANGED_TRANSACTION(() => {
      TODOS_DATA[findIndexTodo(id)].archived = true;
      return `archived: ${id}`; // this make re render
    });

    console.log({ message: "successfully archived todo" });
  };

  const unarchivedTodo = (id: Id): void => {
    SET_CHANGED_TRANSACTION(() => {
      TODOS_DATA[findIndexTodo(id)].archived = false;
      return `unarchived: ${id}`; // this make re render
    });
    
    console.log({ message: "successfully unarchived todo" });
  };
  
  const onDeleteClickHandler = (): void => {
    deleteTodo(id);
  };

  const onArchiveClickHandler = (): void => {
    if (archived === false) {
      return archiveTodo(id);
    }
    return unarchivedTodo(id);
  };

  const onTitleBlurHandler = (e: FocusEvent<HTMLHeadingElement>): void => {
    SET_CHANGED_TRANSACTION(TODOS_DATA[findIndexTodo(id)].title = (e.currentTarget.textContent as string));
    console.log(TODOS_DATA[findIndexTodo(id)]);
    e.currentTarget.contentEditable = "false";
  };

  const onTitleDoubleClickHandler = (e: MouseEvent<HTMLHeadingElement>): void => {
    e.currentTarget.contentEditable = "true";
  };

  const onParagraphBlurHandler = (e: FocusEvent<HTMLParagraphElement>): void => {
    SET_CHANGED_TRANSACTION(TODOS_DATA[findIndexTodo(id)].body = (e.currentTarget.textContent as string));
    console.log(TODOS_DATA[findIndexTodo(id)]);
    e.currentTarget.contentEditable = "false";
  };

  const onParagraphDoubleClickHandler = (e: MouseEvent<HTMLParagraphElement>): void => {
    e.currentTarget.contentEditable = "true";
  };

  interface CssXs {
    parent: CSSProp;
    createdAt: CSSProperties;
    button: CSSProp;
  }

  const cssXs: CssXs = {
    parent: {
      display: "grid",
      gap: spacing._3,
      transition: "200ms",
      ...GenericStyles.todosCard,
      [":hover"]: {
        transform: "translateY(-5px)",
        filter: "brightness(130%)"
      }
    },
    createdAt: {
      fontSize: 10, 
      marginBottom: spacing._3, 
      display: "block",
    },
    button: {
      ...GenericStyles.commonButtons,
      display: "grid",
      placeItems: "center",
      background: "none",
      transition: "200ms",
      [":hover"]: {
        background: "#111",
      },
    },
  };

  return <>
    <Section aria-current={archived} aria-label={title} cssXs={cssXs.parent}>
      <Title 
        as={H3} 
        text={title} 
        onBlur={onTitleBlurHandler} 
        onDoubleClick={onTitleDoubleClickHandler} 
        suppressContentEditableWarning 
      />
      <__If is={body !== ""}>
        <Paragraph 
          text={body} 
          onBlur={onParagraphBlurHandler} 
          onDoubleClick={onParagraphDoubleClickHandler} 
          suppressContentEditableWarning 
        />
      </__If>
      <Small cssXs={cssXs.createdAt}>
        {createdAt}
      </Small>
      <Flex gap={spacing._2}>
        <Button aria-label="delete todo" onClick={onDeleteClickHandler} cssXs={{ ...cssXs.button as object, border: `1px solid ${color.danger}` }}>
          <CgTrashEmpty color={color.danger} size={18} />
        </Button>
        <Button aria-label={archived ? "unarchive todo" : "archive todo"} onClick={onArchiveClickHandler} cssXs={{ ...cssXs.button as object, border: `1px solid ${archived ? color.primary : color.warning}` }}>
          {archived 
            ? <BiArchiveOut color={color.primary} /> 
            : <BiArchiveIn color={color.warning} size={18} />
          }
        </Button>
      </Flex>
    </Section>
  </>;
}
