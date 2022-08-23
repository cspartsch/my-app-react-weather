import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
