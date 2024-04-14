import { it, expect, describe } from "vitest";

import getDragEndUpdatedColumns from "./getDragEndUpdatedColumns";
import {
  COMPLETED_TODOS_ID,
  INCOMPLETE_TODOS_ID,
  TypeColumns,
} from "../../../types";

describe("getDragEndUpdatedColumns", () => {
  const columns: TypeColumns = {
    [INCOMPLETE_TODOS_ID]: {
      columnId: INCOMPLETE_TODOS_ID,
      columnTitle: "Incomplete Todos",
      todoIds: ["todo1", "todo2", "todo3"],
    },
    [COMPLETED_TODOS_ID]: {
      columnId: COMPLETED_TODOS_ID,
      columnTitle: "Completed Todos",
      todoIds: ["todo4", "todo5"],
    },
  };

  it("should return the same columns if source and destination are the same", () => {
    const source = { droppableId: INCOMPLETE_TODOS_ID, index: 1 };
    const destination = { droppableId: INCOMPLETE_TODOS_ID, index: 1 };
    const updatedColumns = getDragEndUpdatedColumns({
      source,
      destination,
      columns,
    });

    expect(updatedColumns).toEqual(columns);
  });

  it("should swap items within the same column", () => {
    const source = { droppableId: INCOMPLETE_TODOS_ID, index: 1 };
    const destination = { droppableId: INCOMPLETE_TODOS_ID, index: 2 };
    const updatedColumns = getDragEndUpdatedColumns({
      source,
      destination,
      columns,
    });

    expect(updatedColumns[INCOMPLETE_TODOS_ID].todoIds).toEqual([
      "todo1",
      "todo3",
      "todo2",
    ]);
    expect(updatedColumns[COMPLETED_TODOS_ID].todoIds).toEqual([
      "todo4",
      "todo5",
    ]);
  });

  it("should move item to a different column", () => {
    const source = { droppableId: INCOMPLETE_TODOS_ID, index: 1 };
    const destination = { droppableId: COMPLETED_TODOS_ID, index: 0 };
    const updatedColumns = getDragEndUpdatedColumns({
      source,
      destination,
      columns,
    });

    expect(updatedColumns[INCOMPLETE_TODOS_ID].todoIds).toEqual([
      "todo1",
      "todo3",
    ]);
    expect(updatedColumns[COMPLETED_TODOS_ID].todoIds).toEqual([
      "todo2",
      "todo4",
      "todo5",
    ]);
  });

  it("should move item to a different column and insert at the correct index", () => {
    const source = { droppableId: INCOMPLETE_TODOS_ID, index: 1 };
    const destination = { droppableId: COMPLETED_TODOS_ID, index: 1 };
    const updatedColumns = getDragEndUpdatedColumns({
      source,
      destination,
      columns,
    });

    expect(updatedColumns[INCOMPLETE_TODOS_ID].todoIds).toEqual([
      "todo1",
      "todo3",
    ]);
    expect(updatedColumns[COMPLETED_TODOS_ID].todoIds).toEqual([
      "todo4",
      "todo2",
      "todo5",
    ]);
  });
});
