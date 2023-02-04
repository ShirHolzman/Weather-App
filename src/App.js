import { useEffect, useState } from "react";
import React from "react";
import Logo from "./Components/UI/Logo";
import Intro from "./Components/UI/Intro";
import MainData from "./Components/Output/MainData";
import video from "./sky.mp4";
import WeatherContext from "./Store/weather-contex"

import "./App.css";

function App() {
  const [animationGoing, setAnimationState] = useState(false);
  const [location, setLocation] = useState({
    name: "Jerusalem,Israel",
    latitude: 31.768319,
    longtitude: 35.21371,
    timeZone: "Asia/Jerusalem"
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimationState(false);
    }, 8000);
  }, []);

  return (
    <WeatherContext.Provider value={{location, setLocation}}>
      {/* {animationGoing && <Intro />} */}
      {!animationGoing && (
        <div>
          <Logo />
          <MainData />
        </div>
      )}
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4"></source>
      </video>
    </WeatherContext.Provider>
  );
}

export default App;
