import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const siteSchema = yup.object({
  name: yup.string().required("Name is required"),
  siteType: yup.string().required("Site Type is required"),
});

const initialValues = {
  name: "",
  siteType: "",
  address: "",
};

const Form = () => {
  const handleFormSubmit = async (values, onSubmitProps) => {
    const formResponse = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/sites`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const data = await formResponse.json();
    if (data) {
      alert("Site added successfully!");
    } else {
      alert("Error adding site!");
    }
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={siteSchema}
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
            <label for="form-role-user">Working Site</label>
            <input
              type="radio"
              name="siteType"
              id="form-role-admin"
              value="godown"
              onChange={() => setFieldValue("siteType", "godown")}
            />
            <label for="form-role-admin">Godown</label>
          </div>
          <div className="form-text">
            <TextField
              label="Site Address"
              onBlur={handleBlur}
              onChange={handleChange}
              name="address"
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
              Add Site
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
