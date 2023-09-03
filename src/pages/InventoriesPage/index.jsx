import { useEffect, useState } from "react";
// import "./styles.css";
import Table from "./Table";

const Inventories = () => {
  const [inventories, setInventories] = useState([
    "loading",
    "loading",
    "loading",
    "loading",
    "loading",
  ]);

  console.log(process.env.REACT_APP_SERVER_URL);

  const getInventories = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/inventories`
    );
    const data = await response.json();
    setInventories(data);
  };

  useEffect(() => {
    getInventories();
  }, []);

  return (
    <div className="users-page">
      <h1 className="user-h1">Inventories</h1>
      <Table inventories={inventories} />
    </div>
  );
};

export default Inventories;
