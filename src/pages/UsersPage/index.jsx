import { useEffect, useState } from "react";
import "./styles.css";
import Table from "./Table";

const UsersPage = () => {
  const [users, setUsers] = useState([
    "loading",
    "loading",
    "loading",
    "loading",
    "loading",
  ]);

  const getUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users-page">
      <h1 className="user-h1">Users</h1>
      <Table users={users} />
    </div>
  );
};

export default UsersPage;
