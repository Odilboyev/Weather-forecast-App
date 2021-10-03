import React, { useEffect, useState } from "react";

const WeatherCardCity = ({ todayData, currentDay, clock }) => {
  const [day, setDay] = useState(todayData[0].sys.pod);
  let myday = day == "n" ? "night" : "day";
  // time converter
  const convertTime = (sec) => {
    let date = new Date(sec * 1000);
    let timestr = date.toLocaleTimeString("it-IT");

    return timestr;
  };
  // get Date
  const getDate = (sec) => {
    let date = new Date(sec * 1000);
    const setZero = (n) => (n < 10 ? "0" + n : n);
    return `${setZero(date.getDate())}.${setZero(
      date.getMonth() + 1
    )}.${date.getFullYear()}`;
  };

  // image
  const setImage = (weather) => {
    // set image dynamically && check day or night
    switch (weather) {
      case "Clear":
        if (myday == "day") return "/icons/day.svg";
        else return "/icons/night.svg";
      case "Clouds":
        if (myday == "day") return "/icons/cloudy-day-3.svg";
        else return "/icons/cloudy-night-3.svg";
      case "Rain":
        if (myday == "day") return "/icons/rainy-day.svg";
        else return "/icons/rainy-night.svg";
      case "Snow":
        if (myday == "day") return "/icons/snowy-3.svg";
        else return "/icons/snowy-6.svg";
      case "Thunderstorm":
        return "/icons/thunder.svg";
      default:
        return;
    }
  };
  return (
    <>
      {todayData.map((v, i) => {
        return (
          <div className={`weather-card ${currentDay}`} key={i}>
            <div className="card-left">
              <div className="w-75 m-auto">
                <img src={setImage(v.weather[0].main)} />
              </div>
              <h3>{v.weather[0].main}</h3>

              <h2 className="fw-bold">{v.main.temp}°C</h2>

              <hr className="w-50 my-2 mx-auto" />
              <h5>{convertTime(v.dt)}</h5>
              <h4>{getDate(v.dt)}</h4>
            </div>
            <div className="line"></div>
            <div className="card-right ">
              <p>
                RealFeel <span> {v.main.feels_like}°C</span>
              </p>
              <p>
                Humidity: <span>{v.main.humidity}%</span>
              </p>
              <p>
                Probability of precipitation: <span>{v.pop}%</span>
              </p>
              <p>
                Pressure: <span>{v.main.pressure}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WeatherCardCity;
