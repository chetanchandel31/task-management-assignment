import { DragDropContext } from "@hello-pangea/dnd";
import { useTodos } from "../../providers/TodosProvider/useTodos";
import TodosColumn from "./TodosColumn";
import getDragEndUpdatedColumns from "./helpers/getDragEndUpdatedColumns";
import AddTodo from "./AddTodo";
import { editTodo } from "../../API";
import { COMPLETED_TODOS_ID, TypeColumnId } from "../../types";
import SideNavLayout from "../../layouts/SideNavLayout";
import { Loader2 } from "lucide-react";

type Props = {};

export default function TodosPage({}: Props) {
  const { columns, setColumns, isFetching } = useTodos();

  return (
    <SideNavLayout>
      <DragDropContext
        onDragEnd={async (dropResult) => {
          if (dropResult.destination) {
            // update local state
            const updatedColumns = getDragEndUpdatedColumns({
              source: dropResult.source,
              destination: dropResult.destination,
              columns,
            });

            setColumns(updatedColumns);

            // network req
            if (
              dropResult.source.droppableId !==
              dropResult.destination.droppableId
            ) {
              const columnId = dropResult.source.droppableId as TypeColumnId;
              const todoId = columns[columnId].todoIds[dropResult.source.index];

              const isChecked =
                dropResult.source.droppableId !== COMPLETED_TODOS_ID;

              await editTodo(todoId, isChecked);
            }
          }
        }}
      >
        <div className="p-10 bg-slate-100 dark:bg-slate-800 min-h-dvh">
          <AddTodo />

          {isFetching ? (
            <div className="flex justify-center">
              <Loader2 className="my-36 h-14 w-14 animate-spin" />
            </div>
          ) : (
            <div className="flex gap-10 mt-8">
              <TodosColumn column={columns.incompleteTodos} />

              <TodosColumn column={columns.completedTodos} />
            </div>
          )}
        </div>
      </DragDropContext>
    </SideNavLayout>
  );
}
