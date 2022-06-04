import { SetStateAction } from "react";
import { H1, H2, H3, H4, H5, H6 } from "../styles/mame-styled/core/HtmlTag";

export type SetTodoData = (value: SetStateAction<any>) => void;
export type SetSearchTodosData = (value: SetStateAction<never[]>) => void;
export type SetArchivedTodosData = (value: SetStateAction<never[]>) => void;
export type SetSeachTodoInputValue = (value: SetStateAction<string>) => void;
export type SearchTodosData = TodosData[];
export type SearchTodoInputValue = string;
export type Heading = typeof H1 | typeof H2 | typeof H3 | typeof H4 | typeof H5 | typeof H6;
export type Id = string | number;
export interface TodosData {
  id: string | number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}
