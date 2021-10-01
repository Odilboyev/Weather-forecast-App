import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetData } from "./api/getData";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";

export default function Home() {
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      await navigator.geolocation.getCurrentPosition(
        (position) => {
          if (location.lat == null)
            setLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
        },
        (err) => console.log(err)
      );
    };
    const getData = async () => {
      await getLocation();
      if (location.lat != null) {
        const datas = await GetData(location.lat, location.lon);
        setData(datas);
        return datas;
      }
    };
    getData();
  }, [location]);

  const sendProps = (data) => {
    if (data != null) {
      return data;
    }
  };
  return (
    <div className={styles.container}>
      <Main data={sendProps(data)} />
    </div>
  );
}
