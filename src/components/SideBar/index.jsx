import "./styles.css";
import { GoHome } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsFillJournalBookmarkFill, BsShift } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-h2">Dashboard</h2>
      <ul>
        <li onClick={() => scrollToSection("home")}>
          <GoHome className="sidebar-icon" />
          Home
        </li>
        <li onClick={() => scrollToSection("report")}>
          <HiOutlineDocumentReport className="sidebar-icon" />
          Reports
        </li>
        <li onClick={() => navigate("/logs")}>
          <BsFillJournalBookmarkFill className="sidebar-icon" />
          Logs
        </li>
        <li>
          <BsShift className="sidebar-icon" />
          Shift Mode
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
