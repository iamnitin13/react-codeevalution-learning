import React from "react";
import { useFormik } from "formik";
import ErrorMessage from "./ErrorMessage";
import * as Yup from "yup";

/** yup library provide a custom object validation schema;
 * formik provide validationSchema that transform Yup’s validation errors messages into a pretty object whose keys match
 */

const initialValues = { name: "", email: "", channel: "" };

/** define custom validation and error message;
 * validate function must produce an error object with a matching shape to our values/initialValues
 */

// const validate = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   } else if (/[\d+\.+*&^%$@!~()#-]/i.test(values.name)) {
//     errors.name = "Name must not contain numbers or special symbols.";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address.";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   } else if (values.channel.length > 10) {
//     errors.channel = "Must be 10 characters or less";
//   }

//   return errors;
// };

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (value) => {
      console.log(JSON.stringify(value, null, 2));
    },
    // validate,

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .max(20, "Must be 20 characters or less"),
      email: Yup.string().required("Required").email("Invalid email address."),
      channel: Yup.string()
        .required("Required")
        .max(10, "Must be 10 characters or less"),
    }),
  });

  // destruture all the property from useFormik return
  const {
    values: { name, email, channel },
    handleSubmit,
    handleChange,
    handleBlur,
    touched, //also keep track of field visited; stores this information in an object called touched; {[field.name]:boolean}
    errors,
  } = formik;

  return (
    <div className="form-container">
      <h2>Youtube Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name" // name must matches with the initialValues keys as it use e.target.name:e.target.values and
          // state as {} that will have dynamice name:value we can think of like that
          id="name"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage touched={touched.name} message={errors.name} />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage touched={touched.email} message={errors.email} />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          value={channel}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage touched={touched.channel} message={errors.channel} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
