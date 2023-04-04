import { Form, Formik } from "formik";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextInput from "../Inputs/TextInput";
import FormIntro from "./FormIntro";

function LoginForm() {
  return (
    <Fragment>
      <FormIntro
        message={
          "Log in to enjoy fast and reliable online services in your accout"
        }
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter your email address"),
          password: Yup.string()
            .required("Please enter your password")
            .min(8, "Password must be at least 8 characters long"),
        })}
      >
        <Form className="form">
          <TextInput name="email" type="email" placeholder="Email" />
          <TextInput name="password" type="password" placeholder="Password" />
          <button className="formbtn" type="submit">
            Log In
          </button>
          <p>
            Don't have a Little Lemon account?{" "}
            <Link to="/signup">Sign up here</Link>
          </p>
        </Form>
      </Formik>
    </Fragment>
  );
}

export default LoginForm;
