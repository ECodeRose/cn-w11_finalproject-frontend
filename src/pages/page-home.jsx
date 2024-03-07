import LoginOrRegister from "../components/LoginOrRegister";
import QueryForm from "../components/QueryForm";
import QueryResponse from "../components/QueryResponse";

const PageHome = (props) => {
    return (
        <>
            <p>Home page</p>
            <LoginOrRegister />
            <QueryForm />
            <QueryResponse />
        </>
    )
}

export default PageHome;