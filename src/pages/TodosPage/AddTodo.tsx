import { useState } from "react";
import { Button } from "../../ui/components/Button";
import { Input } from "../../ui/components/Input";
import { TypeTodo } from "../../types";
import { useTodos } from "../../providers/TodosProvider/useTodos";
import { addTodo } from "../../API";

type Props = {};

export default function AddTodo({}: Props) {
  const { setColumns, setTodosMap } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const isDisabled = newTodo === "";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodoItem: TypeTodo = {
      completed: false,
      id: `${Date.now() + Math.round(Math.random() * 100)}`,
      todo: newTodo,
      userId: 1,
    };

    setNewTodo("");

    // update state
    setTodosMap((prevMap) => ({ ...prevMap, [newTodoItem.id]: newTodoItem }));
    setColumns((prevColumns) => {
      const updatedColumns = structuredClone(prevColumns);
      updatedColumns.incompleteTodos.todoIds = [
        newTodoItem.id,
        ...updatedColumns.incompleteTodos.todoIds,
      ];

      return updatedColumns;
    });

    try {
      // network req
      await addTodo(newTodoItem);
    } catch (error) {
      console.log(error, "#ieu28379");
    }
  };

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      onSubmit={onSubmit}
    >
      <Input
        placeholder="Enter todo"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <Button disabled={isDisabled} type="submit">
        Add
      </Button>
    </form>
  );
}
