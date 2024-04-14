import { TypeTodo } from "../../../types";

const URL = "https://dummyjson.com/todos/user/1";

export default async function fetchTodos() {
  const res = await fetch(URL);
  const json: { todos: TypeTodo[] } = await res.json();

  return json;
}
