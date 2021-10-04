import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import UsersTable from "./users/users-table";
function App() {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((data) => setUsers(data));

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));

  },[refresh]);
  return (
    <div className="App">
      <UsersTable users={users} />
    </div>
  );
}

export default App;
