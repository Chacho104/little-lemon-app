import { Formik, Form } from "formik";
import { Fragment } from "react";
import * as Yup from "yup";
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";
import FormButton from "../../FormButton";
import FormIntro from "./FormIntro";

function BookingForm(props) {
  const availableTimes = [
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const timeOptions = availableTimes.map((time) => ({
    value: time,
    label: time,
  }));
  return (
    <Fragment>
      <FormIntro
        title={"Reserve a Table"}
        message={
          "You can now find a table for any occassion! Kindly note that same day reservations are not available."
        }
      />
      <Formik
        initialValues={{
          Date: "",
          availableTimes: "",
          noOfGuests: "",
          occassion: "",
          specialRequest: "",
        }}
        validationSchema={Yup.object({
          Date: Yup.date()
            .min(
              new Date().toLocaleString("en", {
                timeZone: "EAT",
                hour12: false,
              })
            )
            .required("Please enter a valid date"),
          bookingTime: Yup.string().required(
            "Please choose time for the booking"
          ),
          noOfGuests: Yup.number()
            .min(1, "Number of guests must be at least 1")
            .max(10, "Number of guests must be at least 10")
            .required("Number of guests is required"),
          occassion: Yup.string()
            .oneOf(
              ["birthday", "engagement", "anniversary", "other"],
              "Invalid Occassion"
            )
            .required("Please select an occassion"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <TextInput label="Date" name="Date" type="date" />
          <SelectInput label="Time" name="bookingTime">
            <option value="">Select preferred time</option>
            {timeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectInput>
          <TextInput
            label="Number of Guests"
            name="noOfGuests"
            type="number"
            placeholder="1"
          />
          <SelectInput label="Occassion" name="occassion">
            <option value="">Select an occassion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </SelectInput>
          <FormButton>Make your Reservation</FormButton>
        </Form>
      </Formik>
    </Fragment>
  );
}

export default BookingForm;
