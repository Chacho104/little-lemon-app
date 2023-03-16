import { useField } from "formik";

function RadioInput({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="radio-input">
        {children}
        <input type="radio" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default RadioInput;
