import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../state";
import "./styles.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAction = () => {
    dispatch(setLogout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      Logged in as Director
      <button className="login-btn" onClick={logoutAction}>Logout</button>
    </nav>
  );
};

export default Navbar;
