import { Draggable } from "@hello-pangea/dnd";
import { useTodos } from "../../../providers/TodosProvider/useTodos";
import { cn } from "../../../ui/utils/cn";
import BtnDeleteTodo from "./BtnDeleteTodo";

type Props = {
  todoId: string;
  index: number;
};

export default function TodoCard({ index, todoId }: Props) {
  const { todosMap } = useTodos();

  return (
    <Draggable draggableId={String(todoId)} index={index}>
      {(provided, snapshot) => (
        <div
          key={todoId}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={cn("border-2 rounded-md px-3 py-4 mb-4 bg-white", {
              "opacity-50 rotate-2": snapshot.isDragging,
            })}
          >
            <div className="flex justify-between gap-2">
              <div className="font-bold leading-tight ">
                {todosMap[todoId].todo}
              </div>

              <div>
                <BtnDeleteTodo todoId={todoId} />
              </div>
            </div>

            <div className="text-muted-foreground text-xs mt-2">
              12 Jan • Created by <span className="font-bold">Kumar</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
