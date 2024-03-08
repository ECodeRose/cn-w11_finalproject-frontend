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
    const authorizedUser = await getRequest(
      `${import.meta.env.VITE_SERVER_URL}/users/authCheck`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("BLABLABLKA");
    console.log("Persistant User: ", authorizedUser);
    await setUser(authorizedUser);
  };
  return (
    // Allows us to reach "user" and "setUser" from any component.

    <userContext.Provider value={{ user, setUser }}>
      <Navbar />
      <BrowserRouter basename="">
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
