import type { ReactElement, ChangeEvent } from "react";
import type { SetSeachTodoInputValue, SetSearchTodosData, TodosData } from "../../types";
import { Input } from "../../styles/mame-styled/core/HtmlTag";

interface Props {
  TODOS_DATA: TodosData[];
  SET_SEARCHED_TODOS_DATA: SetSearchTodosData;
  setSearchTodoInputValue: SetSeachTodoInputValue;
}

export default function SearchbarTodos({ TODOS_DATA, SET_SEARCHED_TODOS_DATA, setSearchTodoInputValue }: Props): ReactElement {
  const searchTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    const data = TODOS_DATA.filter(todo => todo.title.toLowerCase().includes(searchValue));

    setSearchTodoInputValue(searchValue);
    SET_SEARCHED_TODOS_DATA(data as []);
  };

  const onSearchTodoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchTodo(e);
  };

  return <Input type="search" placeholder="search todo" onChange={onSearchTodoChangeHandler} />;
}
