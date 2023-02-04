import Compass from "../UI/Compass";

import React from "react";

import "./AdditionalInfo.css";

const AdditionalInfo = (props) => {
  return (
    <div className="additional-weather">
      <p>Today's Highlights</p>
      <div className="weather-container">
        <div className="additional-info-card">
          <h2>Wind Direction</h2>
          <Compass className="compass" deg={props.data.windDirection} />
        </div>
        <div className="additional-info-card">
          <h2>Wind Speed</h2>
            <p>{props.data.windSpeed} km/h</p>
        </div>
        <div className="additional-info-card">
          <h2>Radiation</h2>
          <p>{props.data.radiation}</p>
        </div>
        <div className="additional-info-card">
          <h2>Sunrise</h2>
          <p>{props.data.sunrise.getHours() + ':' + props.data.sunrise.getMinutes()}</p>
        </div>
        <div className="additional-info-card">
          <h2>Sunset</h2>
          <p>{props.data.sunset.getHours() + ':' + props.data.sunset.getMinutes()}</p>
        </div>
        <div className="additional-info-card">
          <h2>Visibility</h2>
          <p>{props.data.visibility} m</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
