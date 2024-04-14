import { Draggable } from "@hello-pangea/dnd";
import { useTodos } from "../../providers/TodosProvider/useTodos";
import { cn } from "../../ui/utils/cn";

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
          className="border-2"
          key={todoId}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={cn({
              "opacity-50 rotate-2": snapshot.isDragging,
            })}
          >
            {todosMap[todoId].todo}
          </div>
        </div>
      )}
    </Draggable>
  );
}
