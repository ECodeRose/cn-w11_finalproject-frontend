import Login from "./Login"
import Register from "./Register"

export const LoginOrRegister = (props) => {
    return (
        <>
            <p>Login/Register</p>
            <Login />
            <Register />
        </>
    )
}

export default LoginOrRegister