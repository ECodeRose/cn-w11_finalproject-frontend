import React, { useState, useEffect } from "react";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";

// // imported icons
// import { FaUserShield } from "react-icons/fa";
// import { BsFillShieldLockFill } from "react-icons/bs";
// import { AiOutlineSwapRight } from "react-icons/ai";

// // imported assets
// import video from "../../LoginAssets/weatherVid.mp4";
// import logo from "../../LoginAssets/logo.png";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          id="email"
          name="email"
        />
        <label for="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="*********"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button>Don't have an account? Register here</button>
    </>
  );
};

export default Login;
