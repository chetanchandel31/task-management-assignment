// todos
export type TypeTodo = {
  id: string;
  todo: string;
  completed: boolean;
  userId: number;
};

export type TypeTodosMap = Record<string, TypeTodo>;

// columns
export const COMPLETED_TODOS_ID = "completedTodos";
export const INCOMPLETE_TODOS_ID = "incompleteTodos";
export type TypeColumnId =
  | typeof COMPLETED_TODOS_ID
  | typeof INCOMPLETE_TODOS_ID;

export type TypeColumn = {
  columnTitle: string;
  columnId: TypeColumnId;
  todoIds: string[];
};
export type TypeColumns = Record<TypeColumnId, TypeColumn>;

// misc
export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>;
