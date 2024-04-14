import { X } from "lucide-react";
import { deleteTodo } from "../../../API";
import { useTodos } from "../../../providers/TodosProvider/useTodos";
import { Button } from "../../../ui/components/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../ui/components/Tooltip";

type Props = { todoId: string };

export default function BtnDeleteTodo({ todoId }: Props) {
  const { setColumns, setTodosMap } = useTodos();

  const handleDelete = async () => {
    setColumns((prevColumns) => {
      const updatedColumns = structuredClone(prevColumns);

      updatedColumns.completedTodos.todoIds =
        updatedColumns.completedTodos.todoIds.filter(
          (_todoId) => _todoId !== todoId
        );
      updatedColumns.incompleteTodos.todoIds =
        updatedColumns.incompleteTodos.todoIds.filter(
          (_todoId) => _todoId !== todoId
        );

      return updatedColumns;
    });
    setTodosMap((prevMap) => {
      const updatedMap = structuredClone(prevMap);
      delete updatedMap[todoId];
      return updatedMap;
    });

    await deleteTodo(todoId);
  };

  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleDelete}
              variant="outline"
              className="w-8 h-8 focus:outline-none"
              size={"icon"}
            >
              <X className="h-4 w-4 text-destructive" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Todo</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
