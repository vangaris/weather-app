import React from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [wind, setWind] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const [location, setLocation] = React.useState("loutsa");
  const [country, setCountry] = React.useState("");

  const handleLocation = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };

  const fetchData = async () => {
    setStatus("loading");
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ebc8de08ce3579cf444b51c12772a8bc`
      );
      setWind(Math.round(res.data.wind.speed * 0.87));
      setCountry(res.data.sys.country);
      setStatus("success");
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <div className="App">
      <input value={location} onChange={handleLocation} />
      {status === "loading" ? (
        <h1> loading...</h1>
      ) : status === "success" ? (
        <>
          <h1>{wind}</h1>{" "}
        </>
      ) : (
        <h1> error </h1>
      )}
      country: {country}
    </div>
  );
}
