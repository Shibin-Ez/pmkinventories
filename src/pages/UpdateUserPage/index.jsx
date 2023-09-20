// import "./styles.css";
import Navbar from "../../components/Navbar";
import Form from "./Form";

const AddNewUserPage = () => {
  return (
    <div className="add-user-page">
      <Navbar />
      <h1 className="home-h1">Update User</h1>
      <Form />
    </div>
  );
};

export default AddNewUserPage;
