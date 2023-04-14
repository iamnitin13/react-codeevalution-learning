import { Form, Formik } from "formik";
import React from "react";
import Input from "../shared/Forms/Input";
import { boolean, string, object } from "yup";
import Select from "../shared/Forms/Select";
import Checkbox from "../shared/Forms/Checkbox";
import Button from "../shared/Forms/Button";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        acceptedTerms: false,
        profileTypes: "",
      }}
      onSubmit={(value) => console.log(JSON.stringify(value, null, 2))}
      validationSchema={object({
        userName: string().required().max(10),
        email: string().required().email(),
        acceptedTerms: boolean()
          .required()
          .oneOf([true], "You must accept the terms and conditions."),
        profileTypes: string()
          .required()
          .oneOf(["driver", "employee", "admin"], "Invalid Job Type"),
      })}
    >
      <div className="form-container">
        <h2>Formik Reusable Component</h2>
        <Form>
          <Input
            name="userName"
            id="userName"
            type="text"
            label="UserName"
            placeholder="cooldude@33"
          />
          <Input
            name="email"
            id="email"
            type="email"
            label="E-mail"
            placeholder="alpha@domain.co"
          />
          <Select name="profileTypes" id="profileTypes" label="Profile Type">
            <option value="" disabled>
              Select a profile
            </option>
            <option value="driver">Driver</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
            <option value="other">Other</option>
          </Select>
          <Checkbox name="acceptedTerms" id="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>

          <Button type="submit" label="Submit" />
        </Form>
      </div>
    </Formik>
  );
};

export default SignupForm;
