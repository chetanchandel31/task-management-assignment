import { useState } from "react";

type Props = {};

type TypeColumns = {
  completeTodoIds: string[];
  inCompleteTodoIds: string[];
};

export default function TodosPage({}: Props) {
  const [columns, setColumns] = useState<TypeColumns>({
    completeTodoIds: ["abc"],
    inCompleteTodoIds: ["def", "xyz"],
  });

  return (
    <>
      <div className="bg-red-600">test</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div
        style={{
          display: "flex",
          gap: 118,
        }}
      >
        <div className="min-w-40">
          hi
          {columns.completeTodoIds.map((todo) => (
            <div className="border-2" key={todo}>
              {todo}
            </div>
          ))}
        </div>

        <div className="min-w-40">
          hi2
          {columns.inCompleteTodoIds.map((todo) => (
            <div className="border-2" key={todo}>
              {todo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
