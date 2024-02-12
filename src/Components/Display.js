import React from 'react'

const Display = ({visibleValue,weatherData}) => {
  return (
    <div className="Display" style={{visibility: visibleValue ? "hidden" : "visible"}}>
      <p><span>Temprature: </span>{weatherData.main.temp}</p>
      <p><span>Maximum Temprature: </span>{weatherData.main.temp_max}</p>
      <p><span>Minimum Temprature: </span>{weatherData.main.temp_min}</p>
      <p><span>Feels Like: </span>{weatherData.main.feels_like}</p>
      <p><span>Humidity: </span>{weatherData.main.humidity}</p>
      <p><span>Pressure: </span>{weatherData.main.pressure}</p>
      <p><span>Wind Speed: </span>{weatherData.wind.speed}</p>
    </div>
  )
}

export default Display
