import React, { useEffect, useState } from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
const Left = ({ zone }) => {
  const [loaction, setLoaction] = useState(null);
  useEffect(() => {
    if (zone != null) setLoaction(zone.timezone);
  }, [zone]);
  return (
    <div className="left">
      <div className="background">
        <video src="/background.mp4" autoPlay muted loop></video>
      </div>
      <div className="content">
        <div className="conatiner">
          <div className="top d-flex justify-content-between">
            <h2>forecast</h2>

            <div className="location ">
              <div className="d-flex">
                <div className="icon w-25 center">
                  <MdLocationOn />
                </div>
                <div className="data w-75">
                  <p className="m-0 p-0">Current Location</p>
                  <h6 className="fw-bold">{loaction}</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="input-wrapper center">
            <h2 className="text-capitalize text-center">
              write your city name to get current weather
            </h2>

            <div className="input mt-5">
              <input type="text" />
              <button className="search">
                <MdSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
