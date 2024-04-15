import { Draggable } from "@hello-pangea/dnd";
import { useTodos } from "../../../providers/TodosProvider/useTodos";
import { cn } from "../../../ui/utils/cn";
import BtnDeleteTodo from "./BtnDeleteTodo";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../ui/components/Avatar";
import { Badge } from "../../../ui/components/Badge";

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
            className={cn(
              "border-2 rounded-md px-3 py-4 mb-4 bg-white dark:bg-slate-900",
              {
                "opacity-50 rotate-2": snapshot.isDragging,
              }
            )}
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

            <div className="mt-2">
              <Badge variant={"secondary"}>Design</Badge>
            </div>

            <div className="flex justify-between items-end mt-1">
              <div className="flex gap-1 items-center leading-none">
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-muted-foreground" />{" "}
                <div className="text-muted-foreground text-xs">3</div>
              </div>

              <div>
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://joesch.moe/api/v1/random?key=3"
                    alt="user-profile"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
