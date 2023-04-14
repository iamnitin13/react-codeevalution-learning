import { useField } from "formik";
import React from "react";
import ErrorMessage from "../ErrorMessage";

const Checkbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" }); // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]

  return (
    <>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      <ErrorMessage touched={meta.touched} message={meta.error} />
    </>
  );
};

export default Checkbox;
