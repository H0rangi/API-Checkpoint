import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

function List() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {users.map((e, i) => {
        return <User user={e} />;
      })}
    </div>
  );
}

export default List;
