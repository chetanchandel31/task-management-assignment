import { Droppable } from "@hello-pangea/dnd";
import { TypeColumn } from "../../types";
import TodoCard from "./TodoCard";

type Props = {
  column: TypeColumn;
};

export default function TodosColumn({ column }: Props) {
  return (
    <div className="basis-72">
      {column.columnTitle}

      <Droppable droppableId={column.columnId}>
        {(droppableProvided) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {column.todoIds.map((todoId, index) => (
              <TodoCard index={index} todoId={todoId} key={todoId} />
            ))}

            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
