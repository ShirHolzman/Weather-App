import Autocomplete from "react-google-autocomplete";
import { useContext, useState } from "react";
import WeatherContext from "../../Store/weather-contex";

import "./SearchLine.css";

const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyCt0u2N7a0JmIYoP7lskjUZTtbEkGOD0Gw";
const TIME_ZONE_API = "056c140599944fb1bfb11a1e6cf1f8af";

const SearchLine = () => {
  const { setLocation } = useContext(WeatherContext);

  const placeSelectedHandler = (place) => {
    fetch(
      `https://api.ipgeolocation.io/timezone?apiKey=${TIME_ZONE_API}&lat=${place.geometry.location.lat()}&long=${place.geometry.location.lng()}`
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = {
          name: place.formatted_address,
          latitude: place.geometry.location.lat(),
          longtitude: place.geometry.location.lng(),
          timeZone: data.timezone,
        };
        setLocation(locationData);
      });
  };

  return (
    <Autocomplete
      id="input"
      apiKey={YOUR_GOOGLE_MAPS_API_KEY}
      language="en"
      onPlaceSelected={placeSelectedHandler}
    />
  );
};

export default SearchLine;
