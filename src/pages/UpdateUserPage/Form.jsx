import { TextField, Autocomplete, Button } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";

const userSchema = yup.object({
  name: yup.string().required("Name is required"),
  userRole: yup.string().required("User Role is required"),
});

const Form = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    userRole: "",
    siteId: "",
    mobileNo: "",
    email: "",
  });

  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(-1);
  const [siteName, setSiteName] = useState("");

  const { id } = useParams();

  const getUser = async () => {
    const userResponse = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await userResponse.json();
    setInitialValues({
      name: data.name,
      userRole: data.userRole,
      siteId: parseInt(data.siteId),
      mobileNo: data.mobileNo,
      email: data.email,
    });
  };

  const getSites = async () => {
    const sitesResponse = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/sites`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await sitesResponse.json();
    const formattedData = data.map((site) => ({
      label: site.name,
      siteId: site.id,
    }));

    setOptions(formattedData);
    formattedData.forEach((site, i) => {
      if (site.siteId === initialValues.siteId) {
        setIndex(i);
        setSiteName(site.label);
      }
    });
    // setOptions([
    //   { label: "Option 1", value: 1 },
    //   { label: "Option 2", value: 2 },
    //   { label: "Option 3", value: 3 },
    // ]);
  };

  useEffect(() => {
    getSites();
    getUser();
  }, []);

  const handleFormSubmit = async (values, onSubmitProps) => {
    const modifiedValues = {
      name: values.name,
      userRole: values.userRole,
      siteId: values.siteId.siteId,
      mobileNo: values.mobileNo,
      email: values.email,
    };

    const formResponse = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedValues),
      }
    );
    const data = await formResponse.json();
    if (data) {
      alert("User updated successfully!");
    } else {
      alert("Error adding user!");
    }
    // onSubmitProps.resetForm();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={userSchema}
    >
      {({
        handleSubmit,
        setFieldValue,
        resetForm,
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit} className="admin-add-form">
          <div className="form-text">
            <TextField
              label="Full Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              fullWidth
              error={Boolean(touched.name) && Boolean(errors.name)}
              helperText={touched.name && errors.name}
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
            <label
              for="form-role-user"
              style={
                values.userRole === "user"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              User
            </label>
            <input
              type="radio"
              name="userRole"
              id="form-role-admin"
              value="admin"
              onChange={() => setFieldValue("userRole", "admin")}
            />
            <label
              for="form-role-admin"
              style={
                values.userRole === "admin"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              Admin
            </label>
            <input
              type="radio"
              name="userRole"
              id="form-role-manager"
              value="manager"
              onChange={() => setFieldValue("userRole", "manager")}
            />
            <label
              for="form-role-manager"
              style={
                values.userRole === "manager"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              Manager
            </label>
            <input
              type="radio"
              name="userRole"
              id="form-role-director"
              value="director"
              onChange={() => setFieldValue("userRole", "director")}
            />
            <label
              for="form-role-director"
              style={
                values.userRole === "director"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              Director
            </label>
          </div>
          <div className="form-text">
            previosly assigned site : {siteName}
            <Autocomplete
              disablePortal
              id="user-site-select"
              name="siteId"
              options={options}
              getOptionLabel={(option) => option.label}
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
              value={values.mobileNo}
              fullWidth
              error={Boolean(touched.mobileNo) && Boolean(errors.mobileNo)}
              helperText={touched.mobileNo && errors.mobileNo}
            />
            <TextField
              label="Email (Optional)"
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              value={values.email}
              fullWidth
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
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
              Update
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
