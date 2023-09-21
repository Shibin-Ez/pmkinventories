import "./styles.css";
import Form from "./Form";
import MessageBox from "./MessageBox";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Button } from "@mui/material";

const AddNewUserPage = () => {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <div className="add-user-page">
      <Navbar />
      <h1 className="home-h1">Add New User</h1>
      <Form setUser={setUser} />
      <MessageBox user={user} />
      <a
        href={`https://api.whatsapp.com/send?phone=${
          user.mobileNo
        }&text=Hello ${
          user.name ? user.name : "Name"
        }, your account for PMK Inventories has been created.%0AKindly download the app via the below link:%0Ahttps://tinyurl.com/2h2ajwcc%0A%AUser manual can be downloaded from the below link:%0A${user.manualLink ? user.manualLink : ""}%0A%0AUser Id: ${
          user.userId ? user.userId : "*****"
        }          Password : ${user.passwordHash ? user.passwordHash : "****"}`}
        target="_blank"
      >
        <Button
          type="submit"
          sx={{
            width: "30rem",
            marginBottom: "1rem",
            padding: "0.8rem",
            backgroundColor: "#010411",
            color: "#fff",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
        >
          Message via Whatsapp
        </Button>
      </a>
    </div>
  );
};

export default AddNewUserPage;
