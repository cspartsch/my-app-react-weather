import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <div className="row">
        <div className="col-6 tempRange">
          <div> Low: {props.data.minTemp}°F</div>
          <div> High: {props.data.maxTemp}°F</div>
        </div>
        <div className="col-6 dateTime">
          <div>
            <FormattedDate date={props.data.date} />
          </div>
          <div className="description">{props.data.description}</div>

        </div>
        <div className="row">
          <div className="col-6">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </div>
          <div className="col-6">
            <ul className="weatherDetails">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
