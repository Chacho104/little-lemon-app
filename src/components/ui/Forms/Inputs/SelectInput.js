import { useField } from "formik";
import classes from "./SelectInput.module.css";

function SelectInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={classes.input}>
      <div className={classes["select-input"]}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select
          className={meta.touched && meta.error ? classes.error : ""}
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export default SelectInput;
