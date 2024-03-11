import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./QueryForm.css"
import { useState } from "react"
import { postRequest } from "../common/requests"

export const QueryForm = (props) => {
    const [date, setDate] = useState(new Date());
    const [location, setLocation] = useState(null);

    const sendRequest = async () => {
        const reqBody = JSON.stringify({
            date: date,
            location: location,
        });

        props.setResponse("awaiting response from server");

        const response = await postRequest(`${import.meta.env.VITE_SERVER_URL}/getweather`, reqBody);

        props.setResponse(response);
    }

    return (
        <div className="request element">
            <h2>Enter your location:</h2>
            <form className="request-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                    className="location-search" 
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                ></input>
                <DatePicker 
                    selected={date}
                    dateFormat="dd MMM yyyy"
                    onChange={(calendarDate) => setDate(calendarDate)}
                    todayButton="Click here for today"
                />
                <button onClick={sendRequest}>Send Request</button>
            </form>
        </div>
    )
}

export default QueryForm