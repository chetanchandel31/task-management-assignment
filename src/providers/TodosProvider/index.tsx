import { useEffect, useRef, useState } from "react";
import { TypeColumns, TypeTodosMap } from "../../types";
import { TodosContext } from "./useTodos";
import fetchTodos from "./helpers/fetchTodos";

type Props = { children: React.ReactNode };

// TODO: use axios or react query?
const dedupeIntervalMs = 500;

export default function TodosProvider({ children }: Props) {
  const [todosMap, setTodosMap] = useState<TypeTodosMap>({}); // to store all Todos
  const [columns, setColumns] = useState<TypeColumns>({
    // to store "positions" of todos
    completedTodos: {
      columnTitle: "DONE",
      todoIds: [],
    },
    incompleteTodos: {
      columnTitle: "TO DO",
      todoIds: [],
    },
  });

  const lastFetchInitiatedAtMsRef = useRef<null | number>(null);
  const lastFetchInitiatedAtMs = lastFetchInitiatedAtMsRef.current ?? 0;

  const initializeTodos = async () => {
    // de-duping
    if (Date.now() - lastFetchInitiatedAtMs < dedupeIntervalMs) {
      return;
    }

    lastFetchInitiatedAtMsRef.current = Date.now();

    // fetch and set todos
    try {
      const fetchedTodos = await fetchTodos();

      const _todosMap: TypeTodosMap = {};
      fetchedTodos.todos.forEach((todo) => {
        _todosMap[todo.id] = todo;
      });

      setTodosMap(_todosMap);
    } catch (error) {
      console.log(error, "wyu38974389");
    }
  };

  useEffect(() => {
    initializeTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todosMap,
        setTodosMap,
        columns,
        setColumns,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
