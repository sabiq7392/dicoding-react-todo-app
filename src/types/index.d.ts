import { SetStateAction } from "react";

export type SetTodoData = (value: SetStateAction<any>) => void;
export type SetSearchTodosData = (value: SetStateAction<never[]>) => void;
export type SetSeachTodoInputValue = (value: SetStateAction<string>) => void;
