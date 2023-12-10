import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";

const siteSchema = yup.object({
  name: yup.string().required("Name is required"),
  siteType: yup.string().required("Site Type is required"),
});

const Form = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    siteType: "",
    address: "",
  });

  const { id } = useParams();

  const getSite = async () => {
    const siteResponse = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/sites/site/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await siteResponse.json();
    setInitialValues({
      name: data.name,
      siteType: data.siteType,
      address: data.address,
    });
  };

  useEffect(() => {
    getSite();
  }, []);

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(values);
    const modifiedValues = {
      name: values.name,
      siteType: values.siteType,
      address: values.address,
      latitude: values.latitude,
      longitude: values.longitude,
    };
    const formResponse = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/sites/${id}`,
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
      alert("Site updated successfully!");
    } else {
      alert("Error updating site!");
    }
    // onSubmitProps.resetForm();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={siteSchema}
      enableReinitialize={true}
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
              label="Site Name"
              onBlur={handleBlur}
              onChange={handleChange}
              name="name"
              value={values.name}
              fullWidth
              error={Boolean(touched.name) && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </div>
          <div className="flex">
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
            <label
              for="form-role-user"
              style={
                values.siteType === "workingSite"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              Working Site
            </label>
            <input
              type="radio"
              name="siteType"
              id="form-role-admin"
              value="godown"
              onChange={() => setFieldValue("siteType", "godown")}
            />
            <label
              for="form-role-admin"
              style={
                values.siteType === "godown"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              Godown
            </label>
          </div>
          <div className="form-text">
            <TextField
              label="Site Address"
              onBlur={handleBlur}
              onChange={handleChange}
              name="address"
              value={values.address}
              fullWidth
              multiline
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
