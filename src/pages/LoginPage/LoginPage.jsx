import React from "react";
import { useSelector, useDispatch } from "react-redux";
// action type
import { REGISTER, LOGIN } from "../../action/types";
// components
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
// styles
import "./LoginPage.scss";

const LoginPage = () => {
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  return (
    <div className="login-container">
      {state.isLogin ? (
        <Login onRegister={() => dispatch({ type: REGISTER })} />
      ) : (
        <Register onLogin={() => dispatch({ type: LOGIN })} />
      )}
    </div>
  );
};

export default LoginPage;
