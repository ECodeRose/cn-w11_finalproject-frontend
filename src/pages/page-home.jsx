import { useState } from "react";
import QueryForm from "../components/QueryForm";
import QueryResponse from "../components/QueryResponse";

const PageHome = (props) => {
    const [response, setResponse] = useState(null);

    return (
        <>            
            <QueryForm setResponse={setResponse}/>
            <QueryResponse response={response} />
        </>
    )
}

export default PageHome;