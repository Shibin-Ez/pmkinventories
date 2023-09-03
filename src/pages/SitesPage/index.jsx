import { useEffect, useState } from "react";
// import "./styles.css";
import Table from "./Table";

const SitesPage = () => {
  const [sites, setSites] = useState([
    "loading",
    "loading",
    "loading",
    "loading",
    "loading",
  ]);

  const getSites = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/sites`);
    const data = await response.json();
    setSites(data);
  };

  useEffect(() => {
    getSites();
  }, []);

  return (
    <div className="users-page">
      <h1 className="user-h1">sites</h1>
      <Table sites={sites} />
    </div>
  );
};

export default SitesPage;
