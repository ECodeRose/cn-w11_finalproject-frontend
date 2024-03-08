import { useEffect, useState } from "react"
import Login from "./Login"
import Register from "./Register"

export const LoginOrRegister = (props) => {
    const [feedback, setFeedback] = useState(null);
    const [feedbackType, setFeedbackType] = useState(null); // Either "error" or "success"

    useEffect(() => {}, [feedback]);

    return (
        <div className=".loginregister-holder">
            <Login      setFeedback={setFeedback}   setFeedbackType={setFeedbackType}/>
            <Register   setFeedback={setFeedback}   setFeedbackType={setFeedbackType}/>
            
            { feedback &&
                <div className={`feedback type-${feedbackType}`}>{feedback}</div>
            }
        </div>
    )
}

export default LoginOrRegister