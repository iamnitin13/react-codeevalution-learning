import { useField } from "formik";
import React from "react";
import ErrorMessage from "../ErrorMessage";

const Input = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage touched={meta.touched} message={meta.error} />
    </>
  );
};

export default Input;
