import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "91f41f9a3182f09b51571aedfc243a1c";
  let longitude = "40.7";
  let latitude = "74.0";

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="card">
      <div className="WeatherForecast">
        <div className="row">
          <div className="col weatherForecast-day">
            Tue
            <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temperatures">
              <span className="weatherForecast-temperature-max"> 75°</span>
              <span className="weatherForecast-temperature-min">60°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
