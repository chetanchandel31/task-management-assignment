export type TypeTodo = {
  id: string;
  todo: string;
  completed: boolean;
  userId: number;
};

export type TypeTodosMap = Record<string, TypeTodo>;

export type TypeColumns = {
  completedTodos: {
    columnTitle: string;
    todoIds: string[];
  };
  incompleteTodos: {
    columnTitle: string;
    todoIds: string[];
  };
};

export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>;
