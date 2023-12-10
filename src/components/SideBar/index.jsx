import "./styles.css";
import { GoHome } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsFillJournalBookmarkFill, BsShift, BsDatabase } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();
  console.log(location.pathname);

  const [active, setActive] = useState("home");

  return (
    <div
      className="sidebar"
      style={{
        width: location.pathname == "/home" ? "17rem" : "3rem",
        paddingLeft: location.pathname == "/home" ? "3rem" : "1.2rem",
      }}
    >
      <h2 className="sidebar-h2">
        {location.pathname == "/home" ? "Dashboard" : "<>"}
      </h2>
      <ul>
        <li
          onClick={() => {
            navigate("/home");
            scrollToSection("home");
            setActive("home");
          }}
          style={{ color: active == "home" && "#000" }}
        >
          <GoHome className="sidebar-icon" />
          {location.pathname == "/home" && "Home"}
        </li>
        <li
          onClick={() => {
            navigate("/home");
            scrollToSection("report");
            setActive("report");
          }}
          style={{
            color: active == "report" && "#000",
            transition: "all 0.3s",
          }}
        >
          <HiOutlineDocumentReport className="sidebar-icon" />
          {location.pathname == "/home" && "Reports"}
        </li>
        <li
          onClick={() => {
            navigate("/logs");
            setActive("logs");
          }}
          style={{ color: active == "logs" && "#000" }}
        >
          <BsFillJournalBookmarkFill className="sidebar-icon" />
          {location.pathname == "/home" && "Logs"}
        </li>
        <li
          onClick={() => {
            navigate("/cruds");
            setActive("cruds");
          }}
          style={{ color: active == "cruds" && "#000" }}
        >
          <BsDatabase className="sidebar-icon" />
          {location.pathname == "/home" && "CRUD Logs"}
        </li>
        <li style={{ color: active == "shift" && "#000" }}>
          <BsShift className="sidebar-icon" />
          {location.pathname == "/home" && "Shift Stage"}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
