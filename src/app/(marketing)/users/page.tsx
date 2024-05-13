import React from "react";

interface Users {
  name: string;
  id: number;
  email: string;
}

async function UserPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await data.json();

  return (
    <>
      <div>
        <h1 className="text-[2rem]">UserPage</h1>
        <ol>
          {users.map((user) => (
            <>
              <li>
                {user.id}
                {user.name} {user.email}
              </li>
            </>
          ))}
        </ol>
      </div>
    </>
  );
}

export default UserPage;
