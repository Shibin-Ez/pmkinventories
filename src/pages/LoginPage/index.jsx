import "./styles.css";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleLogin = () => {
    if (inputValue === "dir144") {
      dispatch(
        setLogin({
          token: true,
        })
      );
      navigate("/home");
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="login-page">
      <div>
        <h1 className="home-h1">PMK Inventories</h1>
        <TextField
          label="Login as Director"
          type="password"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          fullWidth
          type="submit"
          onClick={handleLogin}
          sx={{
            marginTop: "2rem",
            padding: "0.8rem",
            backgroundColor: "#010411",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#7e93ff",
            },
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
