import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: "Wednesday, August 17, 2022",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100" value="Search">
                Search
              </button>
            </div>
          </div>
        </form>
        <h1>Seattle</h1>
        <ul className="date">
          <li>{weatherData.date}</li>
          <li className="description">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temp">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6">
            <ul className="weatherDetails">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "91f41f9a3182f09b51571aedfc243a1c";
    let units = "imperial";
    let city = "seattle";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
