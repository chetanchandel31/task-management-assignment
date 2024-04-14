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

export async function deleteTodo(todoId: string) {
  if (Number(todoId) > 100) {
    // dummy API doesn't create actual TODOs on server, i generate mock data to make it work
    // trying delete on those TODOs will fail req
    todoId = `100`;
  }

  const res = await fetch(`${BASE_URL}/${todoId}`, {
    method: "DELETE",
  });
  const json = await res.json();

  return json;
}

export async function editTodo(todoId: string, completed: boolean) {
  if (Number(todoId) > 100) {
    // dummy API doesn't create actual TODOs on server, i generate mock data to make it work
    // trying edit on those TODOs will fail req
    todoId = `100`;
  }

  const res = await fetch(`${BASE_URL}/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed,
    }),
  });
  const json = await res.json();

  return json;
}
