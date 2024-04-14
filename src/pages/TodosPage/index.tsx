import { DragDropContext } from "@hello-pangea/dnd";
import { useTodos } from "../../providers/TodosProvider/useTodos";
import TodosColumn from "./TodosColumn";
import getDragEndUpdatedColumns from "./helpers/getDragEndUpdatedColumns";
import AddTodo from "./AddTodo";

type Props = {};

export default function TodosPage({}: Props) {
  const { columns, setColumns } = useTodos();

  return (
    <DragDropContext
      onDragEnd={(dropResult) => {
        if (dropResult.destination) {
          const updatedColumns = getDragEndUpdatedColumns({
            source: dropResult.source,
            destination: dropResult.destination,
            columns,
          });

          setColumns(updatedColumns);
        }
      }}
    >
      <div className="p-10 bg-slate-100 min-h-dvh">
        <AddTodo />

        <div className="flex gap-10 mt-8">
          <TodosColumn column={columns.incompleteTodos} />

          <TodosColumn column={columns.completedTodos} />
        </div>
      </div>
    </DragDropContext>
  );
}
