import { SetStateAction } from "react";

export type SetTodoData = (value: SetStateAction<any>) => void;
export type SetSearchTodosData = (value: SetStateAction<never[]>) => void;
export type SetSeachTodoInputValue = (value: SetStateAction<string>) => void;
export type SearchTodosData = never[];
export type SearchTodoInputValue = string;
export interface TodosData {
  id: string | number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}
