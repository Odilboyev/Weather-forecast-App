import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import WeatherCard from "../WeatherCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Right = ({ weather }) => {
  const [clock, setClock] = useState(new Date());
  const [daily, setDaily] = useState([]);
  const [todayData, setTodayData] = useState([]);
  const [time, setTime] = useState([]);
  const [day, setDay] = useState(true);
  //route
  const routes = ["today", "daily"];
  const [index, setIndex] = useState(1);
  useEffect(() => {
    if (weather != null && todayData.length == 0) {
      setTodayData([weather.current]);
      console.log(weather.daily);

      setSituation(weather.current);
    }
    if (weather != null) setDaily(weather.daily);
    console.log(daily);
  }, [weather]);
  useEffect(() => {
    setTimeout(() => {
      setClock(getTime());
    }, 1000);
  }, [clock]);

  const getTime = () => {
    let d = new Date();
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    return d;
  };
  // // time converter
  // const convertTime = (sec) => {
  //   let date = new Date(sec * 1000);
  //   let timestr = date.toLocaleTimeString("it-IT");

  //   return timestr;
  // };
  // // get Date
  // const getDate = (sec) => {
  //   let date = new Date(sec * 1000);
  //   const setZero = (n) => (n < 10 ? "0" + n : n);
  //   return `${setZero(date.getDate())}.${setZero(
  //     date.getMonth()
  //   )}.${date.getFullYear()}`;
  // };

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

  // // image
  // const setImage = (weather) => {
  //   // set image dynamically && check day or night
  //   switch (weather) {
  //     case "Clear":
  //       if (day) return "/icons/day.svg";
  //       else return "/icons/night.svg";
  //     case "Clouds":
  //       if (day) return "/icons/cloudy-day-3.svg";
  //       else return "/icons/cloudy-night-3.svg";
  //     default:
  //       return;
  //   }
  // };
  return (
    <div className="right">
      <div className="center h-100">
        <ul className="tabs">
          <span style={{ left: `${index === 0 ? "0" : 50}%` }}></span>
          <li
            className={`tab ${index == 0 ? "active" : ""}`}
            onClick={() => setIndex(0)}
          >
            Today
          </li>
          <li
            className={`tab ${index == 1 ? "active" : ""}`}
            onClick={() => setIndex(1)}
          >
            For 7 days
          </li>
        </ul>
        {routes[index] == "today" ? (
          <>
            <WeatherCard todayData={todayData} day={day} clock={clock} />{" "}
          </>
        ) : routes[index] == "daily" ? (
          <>
            <Swiper
              navigation={true}
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              keyboard={true}
            >
              {daily.map((v, i) => {
                let array = [v];
                console.log(array);
                return (
                  <SwiperSlide>
                    <WeatherCard
                      className="swiper-slide"
                      todayData={array}
                      key={i}
                      day={day}
                    />
                  </SwiperSlide>
                );
              })}{" "}
            </Swiper>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Right;
