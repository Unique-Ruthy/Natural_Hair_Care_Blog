import axios from "axios";
import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useContext(Context);
  // const { dispatch, isFetching } = useContext(Context);
  const [msg, setMsg] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(false);
    setError(false);

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,

        password: passwordRef.current.value,
      });
      setMsg(true);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      {msg && (
        <span style={{ color: "green", margintop: "10px" }}>Successful!</span>
      )}
      <div className="loginFormWrapper">
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
            ref={userRef}
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <button className="loginButton">Login</button>
        </form>
        <h4>
          Don"t have an account?&nbsp;&nbsp;
          <Link className="reglog" to="/register">
            Register
          </Link>
        </h4>
        {error && (
          <span style={{ color: "red", margintop: "10px" }}>
            Enter a valid username and password
          </span>
        )}
      </div>

      {/* <button
        className="loginRegisterButton"
        type="submit"
        disabled={isFetching}
      >
        <Link className="link" to="/register">
          Register
        </Link>
      </button> */}
    </div>
  );
};

export default Login;
