import "./styles.css";
import SideBox from "./SideBox";
import { useNavigate } from "react-router-dom";
import Report from "./Report";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";

const HomePage = () => {
  const [sideUserData, setSideUserData] = useState([
    "loading",
    "loading",
    "loading",
  ]);
  const [sideSiteData, setSideSiteData] = useState([
    "loading",
    "loading",
    "loading",
  ]);
  const [sideInventoryData, setSideInventoryData] = useState([
    "loading",
    "loading",
    "loading",
  ]);

  const getSideBoxData = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/home`);
    const data = await response.json();
    setSideUserData(data.users);
    setSideSiteData(data.sites);
    setSideInventoryData(data.inventories);
  };

  useEffect(() => {
    getSideBoxData();
  }, []);

  return (
    <div className="home-page" id="home">
        <Navbar />
        <h1 className="home-h1">
          <span className="home-h1-span">Welcome to PMK's</span> <br />{" "}
          Inventory Management
        </h1>
        <div className="flex side-box-container">
          <SideBox title="Users" singular="User" data={sideUserData} />
          <SideBox title="Sites" singular="Site" data={sideSiteData} />
          <SideBox
            title="Inventories"
            singular="Inventory"
            data={sideInventoryData}
          />
        </div>
        <Report />
    </div>
  );
};

export default HomePage;
