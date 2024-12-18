import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactsForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed")
      .required("Name is Required"),
    number: Yup.number()
      .transform((value, originalValue) =>
        originalValue.trim() === "" ? null : value
      )
      .nullable()
      .required("Number is required")
      .positive("Number can't be Negative value")
      .integer(),
  });

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ values, handleChange }) => {
          <Form>
            <div>
              <Field
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                name="name"
              />
              <ErrorMessage />
            </div>
            <div>
              <Field
                placeholder="number"
                value={values.number}
                onChange={handleChange}
                name="number"
              />
              <ErrorMessage />
            </div>
            <button type="submit">Submit</button>
          </Form>;
        }}
      </Formik>
    </div>
  );
}
