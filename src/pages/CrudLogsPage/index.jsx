import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Crud from "./Crud";
import "./styles.css";

const CrudLogsPage = () => {
  const data = {
    id: 46,
    userId: 3,
    action: "update",
    tableName: "sites",
    columnName: "siteType",
    entryId: 19,
    oldData: "godown",
    newData: "workingSite",
    timestamp: "2023-12-09T23:16:05.000Z",
    userName: "fayus",
    userID: "40002",
  };

  //   const cruds = [data];
  const [cruds, setCruds] = useState([]);

  const getCruds = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/exchanges/cruds`
    );
    const data = await response.json();
    setCruds(data);
  };

  useEffect(() => {
    getCruds();
  }, []);

  return (
    <div className="users-page">
      <Navbar />
      <h1 className="user-h1">Database Interactions</h1>
      {cruds.map((crud) => (
        <Crud data={crud} />
      ))}
    </div>
  );
};

export default CrudLogsPage;
