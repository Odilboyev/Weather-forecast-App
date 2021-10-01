import React, { useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import MainWrapper from "./MainWrapper";
const Main = ({ data }) => {
  return (
    <MainWrapper>
      <Left />
      <Right weather={data} />
    </MainWrapper>
  );
};

export default Main;
