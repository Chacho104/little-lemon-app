import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Fragment } from "react";
import FormIntro from "./FormIntro";
import TextInput from "../Inputs/TextInput";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <Fragment>
      <FormIntro
        message={
          "Sign up to enjoy fast and reliable online services"
        }
      />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Please enter your first name"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter your last name"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter your email address"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              "Password must contain at least one uppercase letter, one lowercase letter, and one number"
            )
            .required("Please create a password"),
          confirmPassword: Yup.string()
            .required("Please confirm your password")
            .oneOf([Yup.ref("password"), null], "Passwords do not match"),
        })}
      >
        <Form className="form">
          <TextInput
            name="firstName"
            type="text"
            placeholder="First name"
          />
          <TextInput
            name="lastName"
            type="text"
            placeholder="Last name"
          />
          <TextInput name="email" type="email" placeholder="Email" />
          <TextInput name="password" type="password" placeholder="Password" />
          <TextInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
          <button className="formbtn" type="submit">
            Sign Up
          </button>
          <p>
            Already have a Little Lemon account?{" "}
            <Link to="/login">Log in here</Link>
          </p>
        </Form>
      </Formik>
    </Fragment>
  );
}

export default SignupForm;
