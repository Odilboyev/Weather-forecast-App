import React, { useEffect, useState } from "react";

const WeatherCard = ({ todayData, day, clock }) => {
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
  const getDay = (sec) => {
    let day = new Date(sec*1000)
      .toLocaleDateString("en-US", { weekday: "long" });
    return day
  }

  // image
  const setImage = (weather) => {
    // set image dynamically && check day or night
    switch (weather) {
      case "Clear":
        if (day) return "/icons/day.svg";
        else return "/icons/night.svg";
      case "Clouds":
        if (day) return "/icons/cloudy-day-3.svg";
        else return "/icons/cloudy-night-3.svg";
      case "Rain":
        if (day) return "/icons/rainy-day.svg";
        else return "/icons/rainy-night.svg";
      case "Snow":
        if (day) return "/icons/snowy-3.svg";
        else return "/icons/snowy-6.svg";
      case "Thunderstorm":
        return "/icons/thunder.svg";
      default:
        return;
    }
  };
  return (
    <>
      {todayData.map((v, i) => (
        <div className={`weather-card ${!day ? "night" : ""}`} key={i}>
          <div className="card-left">
            <div className="w-75 m-auto">
              <img src={setImage(v.weather[0].main)} />
            </div>
            <h3>{v.weather[0].main}</h3>
            {typeof v.temp == "number" ? (
              <h2 className="fw-bold">{v.temp}°C</h2>
            ) : (
              <>
                {/* <p>Min: {v.temp.min}</p>
                <p>Max: {v.temp.max}</p>
                <p>Morning: {v.morn}</p> */}
                <h2>{v.temp.day}°C </h2>
                {/* <p>Evening: {v.temp.eve}</p>
                <p>Night: {v.temp.night}</p> */}
              </>
            )}
            <hr className="w-50 my-2 mx-auto" />
            <h5>{clock ? clock.toLocaleTimeString("it-IT") : ""}</h5>
            <h6>{getDate(v.dt)}</h6>
            <h4>{getDay(v.dt)}</h4>
          </div>
          <div className="line"></div>
          <div className="card-right ">
            {typeof v.feels_like === "number" ? (
              <p>
                RealFeel <span> {v.feels_like}°C</span>
              </p>
            ) : (
              <>
                <p>
                  <span>Feels like</span>
                </p>
                <p>
                  Morning: <span> {v.feels_like.morn}°C</span>
                </p>
                <p>
                  Day: <span>{v.feels_like.day}°C</span>{" "}
                </p>
                <p>
                  Evening: <span>{v.feels_like.eve}°C</span>{" "}
                </p>
                <p>
                  Night: <span>{v.feels_like.night}°C</span>{" "}
                </p>
              </>
            )}
            <hr />
            <p>
              Humidity: <span>{v.humidity}%</span>
            </p>
            <p>
              Cloud cover: <span>{v.clouds}%</span>
            </p>
            <p>
              Pressure: <span>{v.pressure}</span>
            </p>
            <p>
              Sunrise:
              <span>{convertTime(v.sunrise)}</span>
            </p>
            <p>
              Sunset:
              <span>{convertTime(v.sunset)}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WeatherCard;
