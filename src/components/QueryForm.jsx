import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./QueryForm.css"
import { useState } from "react"
import { getRequest, postRequest } from "../common/requests"

export const QueryForm = (props) => {
    const [date, setDate] = useState(new Date());
    const [location, setLocation] = useState(null);

    const sendRequest = () => {
        console.log(date, "\n", location);

        const reqBody = JSON.stringify({
            date: date,
            location: location,
        });

        postRequest(`${import.meta.env.VITE_SERVER_URL}/getweather`, reqBody);
    }

    return (
        <div className="request">
            <p>Request Form</p>
            <form className="request-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                    className="location-search" 
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                ></input>
                <DatePicker 
                    showicon 
                    selected={date}
                    dateFormat="dd MMM yyyy"
                    onChange={(calendarDate) => setDate(calendarDate)}
                />
                <button onClick={sendRequest}>Send Request</button>
            </form>
        </div>
    )
}

export default QueryForm