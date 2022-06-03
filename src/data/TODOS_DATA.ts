export interface TodosData {
  id: string;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

const TODOS_DATA: TodosData[] = [];

export default TODOS_DATA;
