
import { useState } from 'react'
import './Weather.css'
import DisplayWeather from './DisplayWeather'


function Weather() {
    const [ zip, setZip ] = useState('')
    const [ data, setData ] = useState(null)
    const [unit, setUnit ] = useState('imperial')

   async function getWeather() {
        const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
        console.log(path)
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)
        const {cod, message } = json

        if (cod !== 200) {
            setData({ cod, message })

            return
        }
        const temp = json.main.temp
        const desc = json.weather[0].description
        const name = json.name
        const wind = json.wind.speed
        setData({ temp, desc, name, wind, cod, message })
    }

    return (
        <div className="Weather">
            { data ? <DisplayWeather { ...data} />  : null}
            <form onSubmit={ e => {
                e.preventDefault()
                getWeather()
            } }>
            <input 
            value={zip}
            onChange={ e => setZip(e.target.value) }
            />
            <button type="submit">Submit</button>
            <div className="unit">
                <select value = {unit}
                onChange= {e => setUnit(e.target.value)}>
                    <option value="imperial">Imperial</option>
                    <option value="standard">Standard</option>
                    <option value="metric">Metric</option>
                </select>
            </div>
            </form>
        </div>
    )
}

export default Weather;