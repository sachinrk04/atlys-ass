import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Password.scss";
import { Link } from "react-router-dom";

const Password = ({
  title,
  type,
  name,
  value,
  onChange,
  placeholder,
  forgotpassword,
}) => {
  const [isViewPassword, setIsViewPassword] = useState(false);

  return (
    <div className="password-field">
      <label htmlFor="password">
        <span>{title}</span>
        <div className="forgot-password">
          <Link to="">{forgotpassword}</Link>
        </div>
      </label>
      <div className="password-input-eye">
        <input
          type={isViewPassword ? "text" : type}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
        <span
          className="show-password"
          onClick={() => setIsViewPassword(!isViewPassword)}
        >
          <VisibilityIcon fontSize="small" />
        </span>
      </div>
    </div>
  );
};

export default Password;
