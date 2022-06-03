export interface Todos {
  id: string;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

const TODOS_DATA: Todos[] = [];

export default TODOS_DATA;
