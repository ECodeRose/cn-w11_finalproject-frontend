import React, { useContext, useState } from "react";
import { userContext } from "../common/contexts";
import { postRequest } from "../common/requests";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";

// // imported icons
// import { FaUserShield } from "react-icons/fa";
// import { BsFillShieldLockFill } from "react-icons/bs";
// import { AiOutlineSwapRight } from "react-icons/ai";

// // imported assets
// import video from "../../LoginAssets/weatherVid.mp4";
// import logo from "../../LoginAssets/logo.png";
export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const setUser = useContext(userContext).setUser;


  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = JSON.stringify({
        username: username,
        password: pass,
    });

    const response = await postRequest(`${import.meta.env.VITE_SERVER_URL}/users/logIn`, reqBody);

    if (response.error) {
      props.setFeedback(response.error)
      props.setFeedbackType("error");
    } else {
      props.setFeedback("Login successful.") // The page will probably update before this is visible but it's here just in case.
      props.setFeedbackType("success");
      setUser(response.user);
    }
  }


  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          id="username"
          name="username"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="*********"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      {/* <button onClick={() => props.onFormSwitch("register")}>
        Don&apos;t have an account? Register here
      </button> */}
    </div>
  );
};

export default Login;
