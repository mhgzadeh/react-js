import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "./services/api-client";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // if the error is the of cancel error then return nothing
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient
      .delete("/users/" + user.id)
      .catch((err: Error) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mohammad" };
    setUsers([...users, newUser]);

    // .then is needed because a new user has been added to backend that can
    // have different id. this new id is generated automatically via backend not frontend
    apiClient
      .post("/users/", newUser)
      .then(({ data: saveUser }) => setUsers([saveUser, ...users])) // .then((response) => setUsers([response.data, ...users]))
      .catch((err: Error) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient
      .patch(
        "/users/" + user.id,
        updatedUser
      )
      .catch((err: Error) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div className="container mt-5">
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary my-3" onClick={addUser}>
        Post/Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-secondary me-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
