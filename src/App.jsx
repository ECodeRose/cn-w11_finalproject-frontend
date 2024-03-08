import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./pages/page-home";
import PageUser from "./pages/page-user";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Cookie from "js-cookie";
import { getRequest } from "./common/requests";
import { userContext } from "./common/contexts";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (document.cookie) {
      let token = Cookie.get("jwt_token");
      if (token === false) {
        setUser({});
      } else {
        logInWithToken(token, setUser);
      }
    }
  }, []);

  const logInWithToken = async (token, setUser) => {
    console.log("token", token);

    const authorizedUser = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/users/authCheck`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      console.log(response);
      return response.json();
    });

    console.log(`Bearer ${token}`);
    console.log("Persistant User: ", authorizedUser);
    setUser(authorizedUser);
  };
  return (
    // Allows us to reach "user" and "setUser" from any component.

    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter basename="">
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="" element={<PageHome />} />
            <Route path="/user" element={<PageUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
