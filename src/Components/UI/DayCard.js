<<<<<<< HEAD
import Cloudy from "../WeatherIcons/Cloudy";
import PartiallyCloudy from "../WeatherIcons/PartiallyCloudy";
import Rain from "../WeatherIcons/Rain";
import Snow from "../WeatherIcons/Snow";
import Sunny from "../WeatherIcons/Sunny";
import ThunderStorm from "../WeatherIcons/ThunderStorm";

import "./DayCard.css";

const ICONS = {
    0: Sunny,
    1: PartiallyCloudy,
    2: PartiallyCloudy,
    3: PartiallyCloudy,
    45: Cloudy,
    48: Cloudy,
    51: Rain,
    53: Rain,
    55: Rain,
    56: Rain,
    57: Rain,
    61: Rain,
    63: Rain,
    65: Rain,
    66: Rain,
    67: Rain,
    71: Snow,
    73: Snow,
    75: Snow,
    77: Snow,
    80: Rain,
    81: Rain,
    82: Rain,
    85: Snow,
    85: Snow,
    95: ThunderStorm,
    96: ThunderStorm,
    99: ThunderStorm,
  };

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DayCard = (props) => {
    const WeatherIcon = ICONS[Number(props.description)];
    return (
        <div className="card-item">
            <h2 className="day-name">{DAYS[props.day]}</h2>
            <div className="weather-icon-img">
                <WeatherIcon />
            </div>
            <div className="day-temp">
                <h2>{props.temp}</h2>
                <span>°C</span>
            </div>
        </div>
    );
};

export default DayCard;
=======
import Cloudy from "../WeatherIcons/Cloudy";
import PartiallyCloudy from "../WeatherIcons/PartiallyCloudy";
import Rain from "../WeatherIcons/Rain";
import Snow from "../WeatherIcons/Snow";
import Sunny from "../WeatherIcons/Sunny";
import ThunderStorm from "../WeatherIcons/ThunderStorm";

import "./DayCard.css";

const ICONS = {
    0: Sunny,
    1: PartiallyCloudy,
    2: PartiallyCloudy,
    3: PartiallyCloudy,
    45: Cloudy,
    48: Cloudy,
    51: Rain,
    53: Rain,
    55: Rain,
    56: Rain,
    57: Rain,
    61: Rain,
    63: Rain,
    65: Rain,
    66: Rain,
    67: Rain,
    71: Snow,
    73: Snow,
    75: Snow,
    77: Snow,
    80: Rain,
    81: Rain,
    82: Rain,
    85: Snow,
    85: Snow,
    95: ThunderStorm,
    96: ThunderStorm,
    99: ThunderStorm,
  };

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DayCard = (props) => {
    const WeatherIcon = ICONS[Number(props.description)];
    return (
        <div className="card-item">
            <h2 className="day-name">{DAYS[props.day]}</h2>
            <div className="weather-icon-img">
                <WeatherIcon />
            </div>
            <div className="day-temp">
                <h2>{props.temp}</h2>
                <span>°C</span>
            </div>
        </div>
    );
};

export default DayCard;
>>>>>>> 750a379b369ac59f8cbee5e62b88eca6388f1624
