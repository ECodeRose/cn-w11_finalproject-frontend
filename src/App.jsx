import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./pages/page-home";
import PageUser from "./pages/page-user";
import Navbar from "./components/Navbar";
import { userContext } from "./common/contexts";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

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

    </ userContext.Provider>
  );
}

export default App;
