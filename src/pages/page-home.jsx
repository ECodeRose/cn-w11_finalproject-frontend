import { useState } from "react";
import LoginOrRegister from "../components/LoginOrRegister";
import QueryForm from "../components/QueryForm";
import QueryResponse from "../components/QueryResponse";

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