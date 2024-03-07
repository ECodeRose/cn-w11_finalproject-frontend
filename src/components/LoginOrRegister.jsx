import Login from "./Login"
import Register from "./Register"

export const LoginOrRegister = (props) => {
    return (
        <div className=".loginregister-holder">
            <Login />
            <Register />
        </div>
    )
}

export default LoginOrRegister