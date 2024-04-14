import { useContext } from "react";
import { createContext } from "react";
import { TypeColumns, TypeSetState, TypeTodosMap } from "../../types";

type TypeTodosContext = {
  todosMap: TypeTodosMap;
  setTodosMap: TypeSetState<TypeTodosMap>;
  columns: TypeColumns;
  setColumns: TypeSetState<TypeColumns>;
};

const logWarning = () =>
  console.warn("the component probably isn't wrapped with todos-context");

export const TodosContext = createContext<TypeTodosContext>({
  todosMap: {},
  setTodosMap: logWarning,
  columns: {
    completedTodos: {
      columnTitle: "DONE",
      todoIds: [],
      columnId: "completedTodos",
    },
    incompleteTodos: {
      columnTitle: "TO DO",
      todoIds: [],
      columnId: "incompleteTodos",
    },
  },
  setColumns: logWarning,
});

export const useTodos = () => useContext(TodosContext);
