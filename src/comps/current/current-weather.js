import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">{data.city.split(",")[0]}</p>
                <p className="weather-desc">{data.weather[0].description}</p>
            </div>
            <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)} °F</p>
                <div className="param">
                    <span className="param-label">feels like</span>
                    <span className="param-value">{Math.round(data.main.feels_like)} °F</span>
                </div>
                <div className="param">
                    <span className="param-label">wind</span>
                    <span className="param-value">{data.wind.speed} mph</span>
                </div>
                <div className="param">
                    <span className="param-label">humidity</span>
                    <span className="param-value">{data.main.humidity} %</span>
                </div>
                <div className="param">
                    <span className="param-label">pressure</span>
                    <span className="param-value">{data.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;