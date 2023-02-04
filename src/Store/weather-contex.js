import React from "react";

const WeatherContext = React.createContext({
  name: "Jerusalem,Israel",
  latitude: 31.768319,
  longtitude: 35.21371,
  timeZone: "Asia/Jerusalem"
});

export default WeatherContext;