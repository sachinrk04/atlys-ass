import React, { useState } from "react";
import { useDispatch } from "react-redux";
// action type
import { CLOSE_MODAL, IS_AUTH_LOGIN } from "../../action/types";
import LoginHeader from "../LoginHeader/LoginHeader";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Password from "../Password/Password";
// style
import "./Login.scss";

const Login = ({ onRegister }) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // on change handle for login
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  // on submit handle for login
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: IS_AUTH_LOGIN,
      payload: {
        email: loginData.email,
        password: loginData.password,
        userId: loginData.email + loginData.password,
      },
    });
    // modal close after login
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <div className="login-box">
      <LoginHeader header={"WELCOME BACK"} title={"Log into your account"} />
      <form onSubmit={handleSubmit}>
        <Input
          title="Email or Username"
          placeholder="Enter your email or username"
          type="text"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
        />
        <Password
          title="Password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder="Enter your password"
          forgotpassword="Forgot password?"
        />
        <Button type="submit">Login now</Button>
        <div className="register-link">
          <p>
            Not registered yet? <span onClick={onRegister}>Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
