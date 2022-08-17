import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary" value="Search">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>Seattle</h1>
      <ul>
        <li>Tuesday, August 16, 2022</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div clasName="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />
          68°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
