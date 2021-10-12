import React from "react";
import "./styles.css";

import Knots from "../src/components/Knots";
import { fetchCurrentWeather } from "../src/services/currentWeather.service.ts";

export default function App() {
  const [wind, setWind] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [weather, setWeather] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const fetchData = async () => {
    setStatus("loading");
    try {
      const res = await fetchCurrentWeather({
        params: { q: location, appid: "ebc8de08ce3579cf444b51c12772a8bc" }
      });
      console.log({ res });
      setWind(Math.round(res.data.wind.speed * 0.87));
      setCountry(res.data.sys.country);
      setWeather(res.data.weather[0].description);
      setStatus("success");
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <div className="App">
      <input value={location} onChange={handleLocation} />
      <button disabled={location === ""} onClick={fetchData}>
        search
      </button>
      {status === "loading" ? (
        <h1> loading...</h1>
      ) : status === "success" || status === "" ? (
        <>
          <Knots knots={wind} />
          <p> {weather} </p>
        </>
      ) : (
        <h1> error </h1>
      )}
      country: {country}
    </div>
  );
}
