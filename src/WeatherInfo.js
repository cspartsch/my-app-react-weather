import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="date">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <ul className="weatherDetails">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
