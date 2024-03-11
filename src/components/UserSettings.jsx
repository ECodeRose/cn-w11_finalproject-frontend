import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../common/contexts";
const UserSettings = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {user, setUser} = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/update/password`, {
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

    console.log(user.token);

    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/delUser`, {
      method: "DELETE",      
      headers: {
        Authorization: `Bearer ${user.token}`
      },
    });

    if (res.ok) {
      alert("Account deleted");
      setUser(null);
      navigate("/");
    } else {
      alert("Failed to delete account");
    }
  };

  const [hometown, setHometown] = useState("");
  const [favouriteTowns, setFavouriteTowns] = useState([]);

  const handleAddFavouriteTown = (e) => {
    e.preventDefault();
    if (favouriteTowns.length < 3 && favouriteTowns.indexOf(hometown) === -1) {
      setFavouriteTowns([...favouriteTowns, hometown]);
      setHometown("");
    }
  };
  const handleRemoveFavouriteTown = (town) => {
    setFavouriteTowns(favouriteTowns.filter((t) => t !== town));
  };

  return (
    <div>
      <h2>User Settings</h2>
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
      <form onSubmit={handleAddFavouriteTown}>
        <label htmlFor="hometown">Hometown</label>
        <input
          type="text"
          value={hometown}
          onChange={(e) => setHometown(e.target.value)}
          id="hometown"
          name="hometown"
        />
        <button type="submit">Add Favourite Town</button>
      </form>
      <ul>
        {favouriteTowns.map((town) => (
          <li key={town}>
            {town}
            <button onClick={() => handleRemoveFavouriteTown(town)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSettings;
