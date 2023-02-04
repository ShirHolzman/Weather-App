import DayCard from "../UI/DayCard";

import "./FutureWeather.css";

const FutureWeather = (props) => {
    const futureWeather = [
    {
      temp: props.data.tempMax[0],
      description: props.data.weatherCode[0],
      date: new Date(props.data.date[0]).getDay(),
    },
    {
      temp: props.data.tempMax[1],
      description: props.data.weatherCode[1],
      date: new Date(props.data.date[1]).getDay(),
    },
    {
      temp: props.data.tempMax[2],
      description: props.data.weatherCode[2],
      date: new Date(props.data.date[2]).getDay(),
    },
    {
      temp: props.data.tempMax[3],
      description: props.data.weatherCode[3],
      date: new Date(props.data.date[3]).getDay(),
    },
    {
      temp: props.data.tempMax[4],
      description: props.data.weatherCode[4],
      date: new Date(props.data.date[4]).getDay(),
    },
    {
      temp: props.data.tempMax[5],
      description: props.data.weatherCode[5],
      date: new Date (props.data.date[5]).getDay(),
    },
    {
      temp: props.data.tempMax[6],
      description: props.data.weatherCode[6],
      date: new Date(props.data.date[6]).getDay(),
    },
  ];
  return (
    <div className="cards">
      {futureWeather.map((day, index) => (
        <DayCard
          day={day.date}
          key={index}
          temp={day.temp}
          description={day.description}
        />
      ))}
    </div>
  );
};

export default FutureWeather;
