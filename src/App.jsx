import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./pages/page-home";
import PageUser from "./pages/page-user";
import Navbar from "./components/Navbar";

function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  // const toggleForm = (formName) => {
  //     setCurrentForm(formName);
  // }
  return (
    // <div className='App'>
    //     {
    //         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
    //     }
    // </div>

    <>
      <Navbar />
      <BrowserRouter basename="">
        <Routes>
          <Route path="" element={<PageHome />} />
          <Route path="/user" element={<PageUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
