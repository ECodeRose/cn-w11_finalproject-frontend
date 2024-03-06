import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./QueryForm.css"

export const QueryForm = (props) => {
    return (
        <div className="query">
            <p>Query Form</p>
            <form className="query-form">
                <input className="locations-earch" placeholder="Location"></input>
                <DatePicker placeholder="Select a date"/>
                <button>Send Query</button>
            </form>
        </div>
    )
}

export default QueryForm