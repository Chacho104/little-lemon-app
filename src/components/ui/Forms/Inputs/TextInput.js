import { useField } from "formik";
import classes from "./TextInput.module.css";

function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  if (label) {
    return (
      <div className={classes.input}>
        <div className={classes["text-input"]}>
          <label htmlFor={props.id || props.name}>{label}</label>
          <input
            className={meta.touched && meta.error ? classes.error : ""}
            {...field}
            {...props}
          />
        </div>
        {meta.touched && meta.error ? (
          <div className={classes["error-message"]}>{meta.error}</div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className={classes["input-var"]}>
        <input
          className={meta.touched && meta.error ? classes.error : ""}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className={classes["error-message"]}>{meta.error}</div>
        ) : null}
      </div>
    );
  }
}

export default TextInput;
