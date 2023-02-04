import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../../Store/weather-contex";
import FutureWeather from "./FutureWeather.js";
import SearchLine from "../UI/SearchLine.js";
import TodayWeather from "./TodayWeather.js";
import AdditionalInfo from "./AdditionalInfo.js";
import Loading from "../UI/Loading.js";

import "./MainData.css";

const MainData = () => {
  const { location } = useContext(WeatherContext);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [todayData, setTodayData] = useState();
  const [futureData, setFutureData] = useState();
  const [additionalData, setAdditionalData] = useState();

  useEffect(() => {
    async function fetchWeather() {
      setIsLoading(true);
      setError(false);
      // Fatching Data for hourly, daily and additional information
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longtitude}&hourly=temperature_2m,precipitation,weathercode&current_weather=true&hourly=surface_pressure,visibility,windspeed_10m,winddirection_10m,direct_radiation&daily=sunrise,sunset&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=${location.timeZone}`
        );
        const data = await response.json();
        setTodayData({
          temp: data.hourly.temperature_2m,
          weatherCode: data.daily.weathercode[0],
        });

        setFutureData({
          tempMax: data.daily.temperature_2m_max,
          tempMin: data.daily.temperature_2m_min,
          weatherCode: data.daily.weathercode,
          date: data.daily.sunset,
        });

        setAdditionalData({
          radiation: data.hourly.direct_radiation[0],
          surfacePressure: data.hourly.surface_pressure,
          visibility: data.hourly.visibility[0],
          sunrise: new Date(data.daily.sunrise[0]),
          sunset: new Date(data.daily.sunset[0]),
          windDirection: data.hourly.winddirection_10m[0],
          windSpeed: data.hourly.windspeed_10m[0],
        });
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchWeather();
  }, [location]);
  return (
    <div className="main-data">
      <SearchLine />
      <React.Fragment>
        {isLoading && <Loading></Loading>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && !error && (
          <React.Fragment>
            <FutureWeather data={futureData} />
            <TodayWeather data={todayData} />
            <AdditionalInfo data={additionalData} />
          </React.Fragment>
        )}
      </React.Fragment>
    </div>
  );
};

export default MainData;
