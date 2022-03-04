import { FieldInputProps } from "formik";
import { CSSProperties, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | false;
}

function InputField({ label, error, id, ...props }: Props) {
  return (
    <div style={rootStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input id={id} {...props} style={inputStyle(Boolean(error))} />
      {error && <p style={errorMessageStyle}>{error}</p>}
    </div>
  );
}
const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
};

const labelStyle: CSSProperties = {
  fontWeight: "bold",
};

const errorMessageStyle: CSSProperties = {
  color: "red",
  margin: 0,
};

const inputStyle = (error: boolean): CSSProperties => ({
  border: error ? "0.1rem solid red" : "0.1rem solid grey",
  borderRadius: "0.2rem",
});

export default InputField;
