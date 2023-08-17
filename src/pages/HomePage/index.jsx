import "./styles.css";
import SideBox from "./SideBox";
import { useNavigate } from "react-router-dom";
import Report from "./Report";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-h1">
        <span className="home-h1-span">Welcome to PMK's</span> <br /> Inventory
        Management
      </h1>
      <div className="flex side-box-container">
        <SideBox title="Users" singular="User" />
        <SideBox title="Sites" singular="Site" />
        <SideBox title="Inventories" singular="Inventory" />
      </div>
      <Report />
    </div>
  );
};

export default HomePage;
