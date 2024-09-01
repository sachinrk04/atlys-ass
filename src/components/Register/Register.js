import React, { useState } from "react";
// components
import LoginHeader from "../LoginHeader/LoginHeader";
import Input from "../Input/Input";
import Password from "../Password/Password";
import Button from "../Button/Button";
// styles
import "./Register.scss";

const Register = ({ onLogin }) => {
  const [register, setRegister] = useState({
    email: "",
    username: "",
    password: "",
  });

  // on change handle for Register
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  // on submit handle for Register not add register functionality
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Register:", register);
  };
  return (
    <div className="register-box">
      <LoginHeader header={"SIGN UP"} title={"Create an account to continue"} />
      <form onSubmit={handleSubmit}>
        <Input
          title="Email"
          placeholder="Enter your email"
          type="text"
          name="email"
          value={register.email}
          onChange={onChangeHandler}
        />
        <Input
          title="Username"
          placeholder="Choose a strong password"
          type="text"
          name="username"
          value={register.username}
          onChange={onChangeHandler}
        />
        <Password
          title="Password"
          type="password"
          name="password"
          value={register.password}
          onChange={onChangeHandler}
          placeholder="Enter your password"
          forgotpassword="Forgot password?"
        />
        <Button type="submit">Continue</Button>
        <div className="login-link">
          <p>
            Already have an account? <span onClick={onLogin}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
