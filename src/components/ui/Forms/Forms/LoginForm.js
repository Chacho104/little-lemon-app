import { Form, Formik } from "formik";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextInput from "../Inputs/TextInput";
import FormIntro from "./FormIntro";

function LoginForm() {
  const usernameOrEmailSchema = Yup.string().test(
    "usernameOrEmail",
    "Invalid username or email",
    function (value) {
      // Defining regular expressions for username and email formats
      const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Checking if the input matches either format
      if (usernameRegex.test(value) || emailRegex.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  );
  return (
    <Fragment>
      <FormIntro
        title={"Little Lemon Log In"}
        message={"Log in to Enjoy fast and reliable online services"}
      />
      <Formik
        initialValues={{
          usernameOrEmail: "",
          password: "",
        }}
        validationSchema={Yup.object({
          usernameOrEmail: usernameOrEmailSchema.required(
            "Please enter your username or email"
          ),
          password: Yup.string()
            .required("Please enter your password")
            .min(8, "Password must be at least 8 characters long"),
        })}
      >
        <Form className="form">
          <TextInput
            name="usernameOrEmail"
            type="alphanumeric"
            placeholder="Username or email"
          />
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
