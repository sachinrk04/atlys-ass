import React from "react";
import "./Input.scss";

const Input = ({
  title,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="input-field">
      <label htmlFor="email"> {title}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
