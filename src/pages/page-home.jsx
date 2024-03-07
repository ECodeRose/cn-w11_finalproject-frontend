import { useState } from "react";
<<<<<<< HEAD
import LoginOrRegister from "../components/LoginOrRegister";
import QueryForm from "../components/QueryForm";
import QueryResponse from "../components/QueryResponse";
=======
import LoginOrRegister from "../../components/LoginOrRegister";
import QueryForm from "../../components/QueryForm";
import QueryResponse from "../../components/QueryResponse";
>>>>>>> 8d283c482928758e018617dfe68aa90c1bbd0bdc

const PageHome = (props) => {
    const [response, setResponse] = useState(null);

    return (
        <>
            <p>Home page</p>
            <LoginOrRegister />
            <QueryForm setResponse={setResponse}/>
            <QueryResponse response={response} />
        </>
    )
}

export default PageHome;