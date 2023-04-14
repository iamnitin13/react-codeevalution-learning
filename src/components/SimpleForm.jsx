/** yup is a 3rd party library provide a custom object validation schema;
 * define and validate the shape and values of data objects; ensuring consistence and error-free,eaiser to debug, maintable
 */

/**
 * NOTE:
 * name must matches with the initialValues keys as it use e.target.name:e.target.values and
 * state as {} that will have dynamice name:value we can think of like that
 */

/** 
 * define custom validation and error message;
 * validate function must produce an error object with a matching shape to our values/initialValues
 
  const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (/[\d+\.+*&^%$@!~()#-]/i.test(values.name)) {
    errors.name = "Name must not contain numbers or special symbols.";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  if (!values.channel) {
    errors.channel = "Required";
  } else if (values.channel.length > 10) {
    errors.channel = "Must be 10 characters or less";
  }

  return errors;
};
*/

import React from "react";
import { useFormik } from "formik";
import ErrorMessage from "../shared/ErrorMessage";
import { object, string } from "yup";

const initialValues = { name: "", email: "", channel: "" };

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (value) => {
      console.log(JSON.stringify(value, null, 2));
    },
    // validate,

    // validationSchema that transform Yup’s validation errors messages into a pretty object whose keys match with the name/intiialValues
    validationSchema: object({
      name: string()
        .required("Required")
        .max(20, "Must be 20 characters or less"),
      email: string().required("Required").email("Invalid email address."),
      channel: string()
        .required("Required")
        .max(10, "Must be 10 characters or less"),
    }),
  });

  // destruture all the property from useFormik return
  const {
    values: { name, email, channel },
    handleSubmit, // execute when there is no error
    handleChange,
    handleBlur, //fires when event lost the focus
    touched, //also keep track of field visited; stores this information in an object called touched; {[field.name]:boolean}
    errors,
    getFieldProps, // get all the formik helper function so that we don't need to write each handler; it pair to input event listner to formik event handlers.
    // not just event; it also pairs to all the props of input,like value,name.
  } = formik;

  return (
    <div className="form-container">
      <h2>Formik Hook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          // name="name"
          // value={name}
          // onChange={handleChange}
          // onBlur={handleBlur}
          {...getFieldProps("name")} // spreed all the input field props;by passing the field name;
        />
        <ErrorMessage touched={touched.name} message={errors.name} />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          // name="email"
          // value={email}
          // onChange={handleChange}
          // onBlur={handleBlur}
          {...getFieldProps("email")}
        />
        <ErrorMessage touched={touched.email} message={errors.email} />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          // name="channel"
          // value={channel}
          // onChange={handleChange}
          // onBlur={handleBlur}
          {...getFieldProps("channel")}
        />
        <ErrorMessage touched={touched.channel} message={errors.channel} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
