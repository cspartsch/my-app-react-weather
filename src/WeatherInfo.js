import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 tempRange">
          <div> Low: {props.data.minTemp}°F</div>
          <div> High: {props.data.maxTemp}°F</div>
        </div>
        <div className="col-6 dateTime">
          <div>
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="cityNameDescription">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <h2>{props.data.city}</h2>
          <div className="description">{props.data.description}</div>
          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>
        <div className="row dayDetails">
          <div className="col-6">Humidity: {props.data.humidity}%</div>
          <div className="col-6">Wind: {props.data.wind}mph</div>
        </div>
      </div>
    </div>
  );
}
