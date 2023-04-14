import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { number, object, string } from "yup";
import Button from "../shared/Forms/Button";

// Formik is a encapuslated that used react context and that internally uses useFormik hooks;
// it follow render props pattern that use to share common code to muiltiple componet ;
// by passing a function as children or render props

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        adress: "",
      }}
      onSubmit={(value) => console.log(JSON.stringify(value, null, 2))}
      validationSchema={object({
        firstName: string().required().max(10),
        lastName: string().required().max(10),
        email: string().required().email(),
        phoneNumber: number()
          .required()
          .test("len", (val) => val.toString().length === 10), // test is used to write custom validation
        adress: string().required().max(50),
      })}
    >
      {({ handleReset }) => {
        return (
          <div className="form-container">
            <h2>Formik Component</h2>
            <Form>
              <label htmlFor="firstName">First Name</label>
              {/* when given name props value,handleOnChange,handleOnBlur pass implicity to the element and as well as other props */}
              <Field id="firstName" name="firstName" placeholder="john" />
              <ErrorMessage
                component="div"
                className="errMessage"
                name="firstName"
              />

              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="mathew" />
              <ErrorMessage
                component="div"
                className="errMessage"
                name="lastName"
              />

              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="xyz@domain.com"
              />
              <ErrorMessage
                component="div"
                className="errMessage"
                name="email"
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                id="phoneNumber"
                type="number"
                name="phoneNumber"
                placeholder="XX-XXXXXXXXXX"
              />
              <ErrorMessage
                component="div"
                className="errMessage"
                name="phoneNumber"
              />

              <label htmlFor="adress">Address</label>
              <Field
                id="adress"
                as="textarea"
                name="adress"
                placeholder="Enter your Address.."
              />
              <ErrorMessage
                component="div"
                className="errMessage"
                name="adress"
              />

              <div className="flex">
                <Button type="reset" label="Reset" handleFunc={handleReset} />
                <Button type="submit" label="Submit" />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
