import React from "react";
import { useState, useNavigate } from "react-router-dom";
const UserSettings = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const res = await fetch("/api/user/updatePassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        alert("Password updated");
      } else {
        alert("Failed to update password");
      }
    } else {
      alert("Passwords do not match");
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/user/deleteAccount", {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Account deleted");
      navigate("/");
    } else {
      alert("Failed to delete account");
    }
  };

  return (
    <div>
      <h1>User Settings</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmPassword"
          name="confirmPassword"
        />
        <button type="submit">Update Password</button>
      </form>
      <form onSubmit={handleDeleteAccount}>
        <button type="submit">Delete Account</button>
      </form>
    </div>
  );
};

export default UserSettings;
