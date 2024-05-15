import { getData } from "@/api/todo";

export default async function Post( ) {
  const todos = await getData();

  const todos2 = await getData();
  const todos3 = await getData();
  return (
    <section>
      <h1>Posts</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
