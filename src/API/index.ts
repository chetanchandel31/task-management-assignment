import { TypeTodo } from "../types";

const BASE_URL = "https://dummyjson.com/todos";

export async function fetchTodos() {
  const res = await fetch(`${BASE_URL}/user/1`);
  const json: { todos: TypeTodo[] } = await res.json();

  return json;
}

export async function addTodo(todo: TypeTodo) {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: todo.todo,
      completed: todo.completed,
      userId: todo.userId,
    }),
  });
  const json = await res.json();

  return json;
}
