import { useFormikContext } from "formik";
import SelectInput from "../Inputs/SelectInput";

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

  const availableHoursFormatted = availableHours.map((hours) => `${hours}:00`);

  const timeOptions = availableHoursFormatted.map((time) => ({
    value: time,
    label: time,
  }));

  return (
    <SelectInput label="Select time" name="bookingTime">
      <option value="">Available time slots</option>
      {timeOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectInput>
  );
}

export default TimeOptions;
