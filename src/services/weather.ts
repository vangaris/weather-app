import axios   from "axios";



type typeParams = {
  params: {
    q: string;
    appid: string;
  };
};


const fetchCurrentWeather = ({ params }: typeParams) => {
 return axios.request({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather`,
    headers: {
      "Content-type": "application/json"
    },
    params
  });

};

export { fetchCurrentWeather };
