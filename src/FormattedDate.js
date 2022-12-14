import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let year = props.date.getFullYear();
  let date = props.date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  let amOrPm = "AM";
  if (hours > 12) {
    amOrPm = "PM";
  }
  if (hours > 12) {
    hours = hours % 12;
  }
  if (hours === 0) {
    hours = 1;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <div>
        {day}, {month} {date}, {year}
      </div>
      <div>
        {hours}:{minutes} {amOrPm}
      </div>
    </div>
  );
}
