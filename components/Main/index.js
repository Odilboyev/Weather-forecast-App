import React, { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import MainWrapper from "./MainWrapper";
import { GetData_WithCity } from "../../pages/api/getDataWithInput";
const Main = ({ data }) => {
  // input
  const [input, setInput] = useState("");
  const [day, setDay] = useState(true);
  const getInput = (e) => {
    (e) => setInput(e.target.value);
  };
  // get data from api
  const [cityData, setCityData] = useState(null);
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState(null);
  const getData = async (city) => {
    let data = await GetData_WithCity(city);
    if (data != "error") {
      if (data != null) {
        setCityData(data);
      }
      setLocation((await data.city.country) + "/" + (await data.city.name));
    }
  };
  return (
    <MainWrapper className={day ? "" : "night"}>
      <Left
        zone={data}
        setInput={setInput}
        location={cityData}
        input={input}
        getData={getData}
      />
      <Right weather={data} day={day} changeday={setDay} search={cityData} />
    </MainWrapper>
  );
};

export default Main;
