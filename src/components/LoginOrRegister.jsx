import { useEffect, useState } from "react"
import Login from "./Login"
import Register from "./Register"
import "./LoginRegister.css";

export const LoginOrRegister = (props) => {
    const [loginMode, setLoginMode] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [feedbackType, setFeedbackType] = useState(null); // Either "error" or "success"

    useEffect(() => {}, [feedback]);

    return (
        <div>

            <button onClick={() => {
                setFeedback(null); // Clear feedback when switching forms.
                setLoginMode(!loginMode)
            }}>{loginMode ? "Not registered?" : "Already have an account?"}</button>
            
            <div className="loginregister-holder">
                {loginMode ?
                <Login      setFeedback={setFeedback}   setFeedbackType={setFeedbackType}/>
                :
                <Register   setFeedback={setFeedback}   setFeedbackType={setFeedbackType}/>
                }
                
                { feedback &&
                    <div className={`feedback type-${feedbackType}`}>{feedback}</div>
                }
            </div>
        </div>
    )
}

export default LoginOrRegister