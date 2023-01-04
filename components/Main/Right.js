import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
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
import WeatherCardCity from "../WeatherCard City";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

// ------------------------- right start-----------------------

const Right = ({ weather, search, day, changeday }) => {
  const [clock, setClock] = useState(new Date());
  const [daily, setDaily] = useState([]);
  const [todayData, setTodayData] = useState([]);
  //
  const [city, setCity] = useState(null);
  //
  const [time, setTime] = useState([]);
  //route
  const routes = ["today", "daily"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (search != null) {
      setCity(search);
      setDaily(null);
      setTodayData(null);
    }
    if (weather != null) {
      setTodayData([weather.current]);

      setSituation(weather.current);
      console.log(day);
      console.log(weather)
    }
    if (weather != null) setDaily(weather.daily);
    // searched city
    console.log(search);
  }, [weather, search]);
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
    console.log(ar);
    // tunga o'zgartirish
    if (ar[0] >= ar[2] || ar[1] <= ar[2]) {
      changeday(false);
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
    <div className={`right ${day ? "" : "night"}`}>
      <div className="center h-100">
        {city == null ? (
          <>
            {weather != null ? (
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
            ) : (
              ""
            )}
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
                    return (
                      <SwiperSlide key={i}>
                        <WeatherCard todayData={array} key={i} day={day} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
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
                For 5 days
              </li>
            </ul>
            {routes[index] == "today" ? (
              <>
                <h2 className="mt-5">{city.city.name}</h2>

                <WeatherCardCity
                  currentDay={day ? "" : "night"}
                  todayData={[city.list[0]]}
                  clock={clock}
                />
              </>
            ) : routes[index] == "daily" ? (
              <>
                <h4 className="mt-5">5 day/3 hour forecast data</h4>
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
                  {city.list.map((v, i) => {
                    let array = [v];
                    return (
                      <SwiperSlide key={i}>
                        <WeatherCardCity
                          currentDay={day ? "" : "night"}
                          todayData={array}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
            ) : (
              ""
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Right;
