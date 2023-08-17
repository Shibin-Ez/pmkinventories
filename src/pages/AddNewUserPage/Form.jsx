import { TextField, Autocomplete, Button } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";

const initialValues = {
  name: "",
  userRole: "",
  siteId: "",
  mobileNo: "",
  email: "",
};

const Form = ({setUser}) => {
  const [options, setOptions] = useState([]);

  const getSites = async () => {
    const sitesResponse = await fetch(`${process.env.REACT_APP_SERVER_URL}/sites`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await sitesResponse.json();
    const formattedData = data.map((site) => site.id + " - " +site.name);
    setOptions(formattedData);
  };

  useEffect(() => {
    getSites();
  }, [])

  const handleFormSubmit = async (values, onSubmitProps) => {
    const modifiedValues = {
      name: values.name,
      userRole: values.userRole,
      siteId: parseInt(values.siteId.split(" - ")[0]),
      mobileNo: values.mobileNo,
      email: values.email,
    };

    const formResponse = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedValues),
    });
    const data = await formResponse.json();
    if(data) {
        alert("User added successfully!");
        setUser(data);
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
              label="Full Name"
              onBlur={handleBlur}
              onChange={handleChange}
              name="name"
              fullWidth
            />
          </div>
          <div className="flex">
            <div className="form-line form-line-left" />
            Select Role
            <div className="form-line form-line-right" />
          </div>
          <div className="form-roles">
            <input
              type="radio"
              name="userRole"
              id="form-role-user"
              value="user"
              onChange={() => setFieldValue("userRole", "user")}
            />
            <label for="form-role-user">User</label>
            <input
              type="radio"
              name="userRole"
              id="form-role-admin"
              value="admin"
              onChange={() => setFieldValue("userRole", "admin")}
            />
            <label for="form-role-admin">Admin</label>
            <input
              type="radio"
              name="userRole"
              id="form-role-manager"
              value="manager"
              onChange={() => setFieldValue("userRole", "manager")}
            />
            <label for="form-role-manager">Manager</label>
            <input
              type="radio"
              name="userRole"
              id="form-role-director"
              value="director"
              onChange={() => setFieldValue("userRole", "director")}
            />
            <label for="form-role-director">Director</label>
          </div>
          <div className="form-text">
            <Autocomplete
              disablePortal
              id="user-site-select"
              name="siteId"
              options={options}
              onChange={(event, value) => setFieldValue("siteId", value)}
              renderInput={(params) => (
                <TextField {...params} label="Assigned Site (Optional)" />
              )}
            />
          </div>
          <div className="form-contact">
            <TextField
              label="Mobile No"
              onBlur={handleBlur}
              onChange={handleChange}
              name="mobileNo"
              fullWidth
            />
            <TextField
              label="Email (Optional)"
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              fullWidth
            />
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
              Add User
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
