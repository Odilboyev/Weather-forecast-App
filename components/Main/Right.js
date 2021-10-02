import React, { useEffect, useState } from "react";

const Right = ({ weather }) => {
  const [todayData, setTodayData] = useState([]);
  const [clock, setClock] = useState(new Date());
  const [time, setTime] = useState([]);
  const [day, setDay] = useState(true);
  useEffect(() => {
    if (weather != null && todayData.length == 0) {
      setTodayData([weather.current]);
      setSituation(weather.current);
    }
  }, [weather, time]);
  useEffect(() => {
    setTimeout(() => {
      setClock(getTime());
    }, 1000);
  }, [clock]);

  // get current time
  const getTime = () => {
    let d = new Date();
    d.getHours();
    d.getMinutes();
    return d;
  };

  // time converter
  const convertTime = (sec) => {
    let date = new Date(sec * 1000);
    let timestr = date.toLocaleTimeString("it-IT");

    return timestr;
  };

  // day / night
  const setSituation = (array) => {
    // vaqtni hisoblash
    let ar = [
      new Date(array.sunrise * 1000).getHours(),
      new Date(array.sunset * 1000).getHours(),
      new Date().getHours(),
    ];
    setTime(ar);
    // tunga o'zgartirish
    if (ar[0] >= ar[2] && ar[1] <= ar[2]) {
      setDay(false);
      console.log(day);
    }
  };

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
      default:
        return;
    }
  };
  return (
    <div className="right center">
      <div className="fw-bold mb-4">
        <h1>Today</h1>
      </div>
      {todayData.map((v, i) => (
        <div className="weather-card" key={i}>
          <div className="card-left">
            <h2 className="fw-bold">{v.temp} °C</h2>
            <h2>
              <img src={setImage(v.weather[0].main)} />
              {v.weather[0].main}
            </h2>
            <h4>{clock.toLocaleTimeString("it-IT")}</h4>
          </div>
          <div className="line"></div>
          <div className="card-right ">
            <p>
              RealFeel <span>{v.feels_like} °C</span>
            </p>
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
    </div>
  );
};

export default Right;
