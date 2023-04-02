import { Formik, Form } from "formik";
import { Fragment, useState } from "react";
import * as Yup from "yup";
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";
import FormIntro from "./FormIntro";
import TimeOptions from "./TimeOptions";
import IsSubmitting from "../SubmissionStates/IsSubmitting";
import DidSubmit from "../SubmissionStates/DidSubmit";
import SubmissionError from "../SubmissionStates/SubmissionError";

function MakeBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(false);

  function refreshPage() {
    setIsSubmitting(false);
    setDidSubmit(false);
    setError(false);
  }

  const makeBookingForm = (
    <Fragment>
      <Formik
        initialValues={{
          Date: "",
          bookingTime: "",
          noOfGuests: "",
          occassion: "",
          name: "",
          email: "",
        }}
        validationSchema={Yup.object({
          Date: Yup.date()
            .min(
              new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString("en", {
                timeZone: "EAT",
                hour12: false,
              })
            )
            .required("Please enter a valid date"),
          bookingTime: Yup.string().required(
            "Please enter time for the booking"
          ),
          noOfGuests: Yup.number()
            .min(1, "Enter at least 1 guest")
            .max(10, "Enter at most 10 guests")
            .required("Please enter number of guests"),
          occassion: Yup.string()
            .oneOf(
              ["birthday", "engagement", "anniversary", "other"],
              "Invalid Occassion"
            )
            .required("Please select an occassion"),
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter your name"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter your email address"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          setIsSubmitting(true);
          const response = await fetch(
            "https://little-lemon-complete-default-rtdb.firebaseio.com/reservations.json",
            {
              method: "POST",
              body: JSON.stringify(values),
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
          }
        }}
      >
        <Form className="form">
          <TextInput
            label="Date"
            name="Date"
            type="date"
            placeholder="dd/mm/yy"
          />
          <TimeOptions />
          <TextInput
            label="No. of guests"
            name="noOfGuests"
            type="number"
            placeholder="0"
          />
          <SelectInput label="Occassion" name="occassion">
            <option value="">Select</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </SelectInput>
          <TextInput
            name="name"
            type="text"
            placeholder="First and last name"
          />
          <TextInput name="email" type="email" placeholder="Email" />
          <button className="formbtn" type="submit">
            Make your Reservation
          </button>
        </Form>
      </Formik>
    </Fragment>
  );

  const isSubmittingDetails = (
    <IsSubmitting message="Processing your table reservation request..." />
  );

  const didSubmitDetails = (
    <DidSubmit
      message="You have successfully reserved a table. To manage your reservations (i.e
        cancel or edit), log in to your account or sign up with the name and email you've just used
        to make your reservation."
      regards="See you soon!"
      onClick={refreshPage}
    />
  );

  const errorMessage = (
    <SubmissionError
      message="Sorry, we could not process your reservation request."
      onClick={refreshPage}
    />
  );

  return (
    <Fragment>
      <FormIntro message={"You can easily find a table for any occassion!"} />
      {!isSubmitting && !didSubmit && !error && makeBookingForm}
      {isSubmitting && !error && isSubmittingDetails}
      {!isSubmitting && !error && didSubmit && didSubmitDetails}
      {error && errorMessage}
    </Fragment>
  );
}

export default MakeBooking;
