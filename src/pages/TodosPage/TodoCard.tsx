import { Draggable } from "@hello-pangea/dnd";
import { useTodos } from "../../providers/TodosProvider/useTodos";

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
            style={{
              opacity: snapshot.isDragging ? 0.9 : 1,
              transform: snapshot.isDragging ? "rotate(-2deg)" : "",
            }}
          >
            {todosMap[todoId].todo}
          </div>
        </div>
      )}
    </Draggable>
  );
}
