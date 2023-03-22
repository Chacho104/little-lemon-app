import { Formik, Form, useFormikContext } from "formik";
import { Fragment } from "react";
import * as Yup from "yup";
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";
import FormButton from "../../FormButton";
import FormIntro from "./FormIntro";

function BookingForm() {
  function TimeOptions() {
    const { values } = useFormikContext();
    const selectedDate = values.Date;

    const currDate = new Date();
    const currHours = currDate.getHours();
    const day = currDate.getDate();
    const month = currDate.getMonth() + 1;
    const formattedMonth = "0" + month;
    const year = currDate.getFullYear();
    const currFormattedDate = year + "-" + formattedMonth + "-" + day;

    let availableHours = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    if (selectedDate === currFormattedDate) {
      availableHours = availableHours.filter((hours) => hours > currHours);
    }

    const availableHoursFormatted = availableHours.map(
      (hours) => `${hours}:00`
    );

    const timeOptions = availableHoursFormatted.map((time) => ({
      value: time,
      label: time,
    }));

    return (
      <SelectInput label="Select Time" name="bookingTime">
        <option value="">Select preferred time</option>
        {timeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectInput>
    );
  }
  return (
    <Fragment>
      <FormIntro
        title={"Reserve a Table"}
        message={"You can now find a table for any occassion!"}
      />
      <Formik
        initialValues={{
          Date: "",
          bookingTime: "",
          noOfGuests: "",
          occassion: "",
          specialRequest: "",
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
          <TimeOptions />
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
