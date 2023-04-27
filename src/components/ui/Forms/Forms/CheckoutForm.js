import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Fragment, useContext, useState } from "react";
import TextInput from "../Inputs/TextInput";
import IsSubmitting from "../SubmissionStates/IsSubmitting";
import DidSubmit from "../SubmissionStates/DidSubmit";
import SubmissionError from "../SubmissionStates/SubmissionError";
import CartContext from "../../../../store/cart-context";

function CheckoutForm(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(false);

  const cartCtx = useContext(CartContext);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const confirmOrderForm = (
    <Fragment>
      <Formik
        initialValues={{ name: "", phoneNumber: "", street: "", apartment: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter your name"),
          phoneNumber: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .min(10, "Phone number must be at least 10 digits")
            .max(10, "Phone number must be at most 10 digits")
            .required("Please enter your phone number"),
          street: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter name of your street/area"),
          apartment: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter name of your apartment"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          setIsSubmitting(true);
          const response = await fetch(
            "https://little-lemon-complete-default-rtdb.firebaseio.com/orders.json",
            {
              method: "POST",
              body: JSON.stringify({
                user: values,
                orderedItems: cartCtx.items,
              }),
            }
          );
          if (!response.ok) {
            setSubmitting(false);
            setError(true);
          } else {
            setSubmitting(false);
            setError(false);
            setIsSubmitting(false);
            setDidSubmit(true);
            cartCtx.clearCart();
          }
        }}
      >
        <Form className="form">
          <h1>Confirm Your Order</h1>
          <h3>
            Please enter the details below to confirm your order worth a total
            of {props.totalAmount} for processing.
          </h3>
          <TextInput
            name="name"
            type="text"
            placeholder="First and last name"
          />
          <TextInput
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
          />
          <TextInput
            name="street"
            type="text"
            placeholder="Name of street/area"
          />
          <TextInput
            name="apartment"
            type="text"
            placeholder="Name of apartment"
          />
          <div className="final-act">
            <button className="formbtn" type="button" onClick={props.rethink}>
              Edit
            </button>
            <button className="formbtn" type="submit">
              Confirm
            </button>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );

  function refreshPage() {
    setIsSubmitting(false);
    setDidSubmit(false);
    setError(false);
  }

  const isSubmittingDetails = (
    <IsSubmitting message="Processing your order..." />
  );

  const didSubmitDetails = (
    <DidSubmit
      message="You have successfully placed your order. We shall swiftly process and
      deliver it to your doorstep."
      regards="Thank you!"
      onClick={props.orderSuccessful}
    />
  );

  const errorMessage = (
    <SubmissionError
      message="Sorry, we could not process your order."
      onClick={refreshPage}
    />
  );

  return (
    <Fragment>
      {!isSubmitting && !didSubmit && !error && confirmOrderForm}
      {isSubmitting && !error && isSubmittingDetails}
      {!isSubmitting && !error && didSubmit && didSubmitDetails}
      {error && errorMessage}
    </Fragment>
  );
}

export default CheckoutForm;
