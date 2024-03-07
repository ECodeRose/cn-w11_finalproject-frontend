import { useEffect } from "react"

export const QueryResponse = (props) => {

    useEffect(() => {

    }, [props.response]);

    const Response = () => {
        if (!props.response) return
        else {
            if (!props.response.location) return <p>Awaiting response from server.</p>;
            const location = props.response.location;
            const weather = props.response.weather;
            return (
                <>
                    <p>Showing weather information for {location.city}, {location.county} in {location.country}</p>
                    <p>Today{"'"}s weather is {weather.weathername[0]}.</p>
                    <p>The highest temperature today will be {weather.temperature[0]} degrees celsius.</p>
                    <p className="response-wrong-prompt">Wrong place? Try using a postcode or search with a more specific location name (eg, Bury, Greater Manchester)</p>
                </>
            )
        }
    }

    return (
        <div>
            <Response />
        </div>
    )
}

export default QueryResponse