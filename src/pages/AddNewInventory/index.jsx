import "./styles.css";
import Form from "./Form";
import Navbar from "../../components/Navbar"

const AddNewInventoryPage = () => {
  return (
    <div className="add-user-page">
      <Navbar />
      <h1 className="home-h1">Add New Inventory</h1>
      <Form />
    </div>
  );
};

export default AddNewInventoryPage;
