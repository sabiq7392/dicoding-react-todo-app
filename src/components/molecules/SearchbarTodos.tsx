import type { ReactElement, ChangeEvent } from "react";
import type { SetSeachTodoInputValue } from "../../types";
import { Input } from "../../styles/mame-styled/core/HtmlTag";
import { CSSProp } from "styled-components";
import STYLES_CONFIG from "../../styles/styles.config";

interface Props {
  setSearchTodoInputValue: SetSeachTodoInputValue;
}

const { spacing } = STYLES_CONFIG;

export default function SearchbarTodos({ setSearchTodoInputValue }: Props): ReactElement {
  const searchTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    setSearchTodoInputValue(searchValue);
  };

  const onSearchTodoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchTodo(e);
  };

  const cssXs: CSSProp = {
    padding: spacing._2,
    background: "rgba(255,255,255, 0.7)",
    borderRadius: 2,
    transition: "200ms",
    [":hover"]: {
      outline: "2px solid white",
    },  
    [":focus"]: {
      background: "white",
    },
  };

  return <Input type="search" placeholder="search todo" onChange={onSearchTodoChangeHandler} cssXs={cssXs} />;
}
