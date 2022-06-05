import type { ReactElement, ChangeEvent } from "react";
import type { SetSeachTodoInputValue } from "../../types";
import { Input } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  setSearchTodoInputValue: SetSeachTodoInputValue;
}

export default function SearchbarTodos({ setSearchTodoInputValue }: Props): ReactElement {
  const searchTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    setSearchTodoInputValue(searchValue);
  };

  const onSearchTodoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchTodo(e);
  };

  return <Input type="search" placeholder="search todo" onChange={onSearchTodoChangeHandler} />;
}
