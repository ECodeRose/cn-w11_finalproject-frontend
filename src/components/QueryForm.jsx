import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./QueryForm.css"
import { useState } from "react"

export const QueryForm = (props) => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="query">
            <p>Query Form</p>
            <form className="query-form">
                <input className="location-search" placeholder="Location"></input>
                <DatePicker 
                    showicon 
                    selected={date}
                    dateFormat="dd MMM yyyy"
                />
                <button>Send Query</button>
            </form>
        </div>
    )
}

export default QueryForm