import { useField } from "formik";
import React from "react";
import ErrorMessage from "../ErrorMessage";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage touched={meta.touched} message={meta.error} />
    </>
  );
};

export default Select;
