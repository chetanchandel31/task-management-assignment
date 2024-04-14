export type TypeTodo = {
  id: string;
  todo: string;
  completed: boolean;
  userId: number;
};

export type TypeTodosMap = Record<string, TypeTodo>;

export type TypeColumn = {
  columnTitle: "DONE" | "TO DO";
  todoIds: string[];
};

export type TypeColumns = {
  completedTodos: TypeColumn;
  incompleteTodos: TypeColumn;
};

export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>;
