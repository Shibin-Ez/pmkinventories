import "./styles.css";
import Form from "./Form";
import MessageBox from "./MessageBox";
import { useState } from "react";
import Navbar from "../../components/Navbar"

const AddNewUserPage = () => {
  const [user, setUser] = useState({});

  return (
    <div className="add-user-page">
      <Navbar />
      <h1 className="home-h1">Add New User</h1>
      <Form setUser={setUser} />
      <MessageBox user={user} />
    </div>
  );
};

export default AddNewUserPage;
