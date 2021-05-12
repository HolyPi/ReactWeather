import './DisplayWeather.css'

function DisplayWeather(props) {

    if (props.cod !== 200) {
        return (
            <div className="DisplayWeather">
                <small className="warning">{props.cod} {props.message}</small>
            </div>
        )
    }
    return (
        <div className="DisplayWeather">
            <p>{props.wind} </p>
            <h1>{props.temp}</h1>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default DisplayWeather