import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "./Table";
import "./styles.css"

const LogsPage = () => {
  const [logs, setLogs] = useState([
    "loading",
    "loading",
    "loading",
    "loading",
    "loading",
  ]);

  const getlogs = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/exchanges`);
    const data = await response.json();
    setLogs(data);
  };

  useEffect(() => {
    getlogs();
  }, []);

  return (
    <div className="users-page">
      <Navbar />
      <h1 className="user-h1">Logs</h1>
      <Table logs={logs} />
    </div>
  );
};

export default LogsPage;
