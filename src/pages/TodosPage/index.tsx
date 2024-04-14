import { DragDropContext } from "@hello-pangea/dnd";
import { useTodos } from "../../providers/TodosProvider/useTodos";
import TodosColumn from "./TodosColumn";

type Props = {};

export default function TodosPage({}: Props) {
  const { columns } = useTodos();

  return (
    <DragDropContext
      onDragEnd={(dropResult) => {
        console.log("drop result", dropResult);
      }}
    >
      <div className="flex gap-10">
        <TodosColumn column={columns.incompleteTodos} />

        <TodosColumn column={columns.completedTodos} />
      </div>
    </DragDropContext>
  );
}
