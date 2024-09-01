import React from "react";
import "./LoginHeader.scss";

const LoginHeader = ({ header, title }) => {
  return (
    <div className="login-header">
      <h1>{header}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default LoginHeader;
