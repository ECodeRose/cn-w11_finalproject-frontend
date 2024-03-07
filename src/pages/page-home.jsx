import { useContext, useState } from "react";
import LoginOrRegister from "../components/LoginOrRegister";
import QueryForm from "../components/QueryForm";
import QueryResponse from "../components/QueryResponse";
import { userContext } from "../common/contexts";

const PageHome = (props) => {
    const [response, setResponse] = useState(null);
    const user = useContext(userContext).user;

    return (
        <>
            <LoginOrRegister />
            <QueryForm setResponse={setResponse}/>
            <QueryResponse response={response} />

            {/* TODO: Replace the above with the following once finished testing. */}
            {/* { !user ?
                <LoginOrRegister />
                :
                <>
                <QueryForm setResponse={setResponse}/>
                <QueryResponse response={response} />
                </>
            } */}
        </>
    )
}

export default PageHome;