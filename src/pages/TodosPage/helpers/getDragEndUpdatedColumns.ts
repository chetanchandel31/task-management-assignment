import { DraggableLocation } from "@hello-pangea/dnd";
import { TypeColumnId, TypeColumns } from "../../../types";

export default function getDragEndUpdatedColumns({
  destination,
  source,
  columns,
}: {
  source: DraggableLocation;
  destination: DraggableLocation;
  columns: TypeColumns;
}): TypeColumns {
  if (
    source.index === destination.index &&
    source.droppableId === destination.droppableId
  ) {
    return structuredClone(columns);
  }

  // move within same column
  if (source.droppableId === destination.droppableId) {
    const updatedColumns = structuredClone(columns);
    const droppableId = source.droppableId as TypeColumnId;

    // remove from source
    const removedItems = updatedColumns[droppableId].todoIds.splice(
      source.index,
      1
    );
    // insert at destination
    updatedColumns[droppableId].todoIds.splice(
      destination.index,
      0,
      removedItems[0]
    );

    return updatedColumns;
  }

  // move to different column
  if (source.droppableId !== destination.droppableId) {
    const updatedColumns = structuredClone(columns);
    const sourceDroppableId = source.droppableId as TypeColumnId;
    const destinationDroppableId = destination.droppableId as TypeColumnId;

    const sourceTodoId =
      updatedColumns[sourceDroppableId].todoIds[source.index];
    // remove from source
    updatedColumns[sourceDroppableId].todoIds = updatedColumns[
      sourceDroppableId
    ].todoIds.filter((todoId) => todoId !== sourceTodoId);

    // INSERT at destination
    updatedColumns[destinationDroppableId].todoIds.splice(
      destination.index,
      0,
      sourceTodoId
    );

    return updatedColumns;
  }

  return structuredClone(columns);
}
