import axios from "axios";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/DebounceHook";
function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query , 500)


  async function getUsers() {
    const { data } = await axios.get("https://dummyjson.com/users");
    setUsers(data.users);
  }
    async function search(q) {
    const { data } = await axios.get("https://dummyjson.com/users/search?q=" + q);
    console.log(data)
    setUsers(data.users);
  }

  useEffect(() => {
    getUsers();
  }, []);


  useEffect(() => {
    search(debounceQuery)
  }, [debounceQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      {users.map((e) => {
        return (
          <div key={e.id}>
            <h3>
              {e.firstName} {e.lastName}
            </h3>
            <p>{e.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
