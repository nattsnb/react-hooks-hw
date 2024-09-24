import { useState, useEffect, useCallback, useMemo } from "react";
import { ToDoList } from "./ex1.jsx"

function useFetchedUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    users,
    isLoading,
  };
}

const UsersList = () => {
  const { isLoading, users } = useFetchedUsers();

  return (
    <div>
      <h1>Users List</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  return (
      <ToDoList></ToDoList>
  )
};

export default App