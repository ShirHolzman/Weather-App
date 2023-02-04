import { CODES } from "./WeatherCodes";
import { VictoryLine } from "victory";

import "./TodayWeather.css";
import React from "react";

const TodayWeather = (props) => {
  const temps = props.data.temp.slice(0, 6)
  const max = Math.max.apply(Math, temps);
  const min = Math.min.apply(Math, temps);
  const data = [
    { x: 1, y: props.data.temp[0] },
    { x: 2, y: props.data.temp[1] },
    { x: 3, y: props.data.temp[2] },
    { x: 4, y: props.data.temp[3] },
    { x: 5, y: props.data.temp[4] },
    { x: 6, y: props.data.temp[5] },
    { x: 7, y: props.data.temp[6] },
  ];
  return (
    <React.Fragment>
      <div className="current-weather">
        <h2>{props.data.temp[0]}°C</h2>
        <p>{CODES[props.data.weatherCode]}</p>
      </div>
      <p className="hourly-weather">Hourly Weather</p>
      <VictoryLine
        maxDomain={{ y: max + 1 }}
        minDomain={{ y: min - 1 }}
        labels={({ datum }) => `${datum.y}°C`}
        height={180}
        width={200}
        className="graph"
        interpolation="natural"
        style={{
          data: { stroke: "rgba(249, 207, 167, 0.884)" },
          labels: {
            fontSize: 5,
          },
        }}
        data={data}
      />
    </React.Fragment>
  );
};

export default TodayWeather;
