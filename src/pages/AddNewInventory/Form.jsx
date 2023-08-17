import { TextField, Button } from "@mui/material";
import { Formik } from "formik";

const initialValues = {
  name: "",
};

const Form = () => {
  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(values);
    const formResponse = await fetch(`${process.env.REACT_APP_SERVER_URL}/inventories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await formResponse.json();
    if (data) {
      alert("User added successfully!");
    } else {
      alert("Error adding user!");
    }
    onSubmitProps.resetForm();
  };

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
      {({
        handleSubmit,
        setFieldValue,
        resetForm,
        values,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit} className="admin-add-form">
          <div className="form-text">
            <TextField
              label="Inventory Name"
              onBlur={handleBlur}
              onChange={handleChange}
              name="name"
              fullWidth
            />
          </div>
          {/* <div className="flex">
            <div className="form-line form-line-left" />
            <div className="form-line-text">Select Site Type</div>
            <div className="form-line form-line-right" />
          </div>
          <div className="form-roles form-site-types">
            <input
              type="radio"
              name="siteType"
              id="form-role-user"
              value="workingSite"
              onChange={() => setFieldValue("siteType", "workingSite")}
            />
            <label for="form-role-user">Working Site</label>
            <input
              type="radio"
              name="siteType"
              id="form-role-admin"
              value="godown"
              onChange={() => setFieldValue("siteType", "godown")}
            />
            <label for="form-role-admin">Godown</label>
          </div> */}
          <div className="form-text">
            {/* <TextField
              label="Site Address"
              onBlur={handleBlur}
              onChange={handleChange}
              name="address"
              fullWidth
              multiline
            /> */}
          </div>
          <div>
            <Button
              fullWidth
              type="submit"
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
              Add Inventory
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
