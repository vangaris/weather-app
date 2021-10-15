import axios   from "axios";



type typeParams = {
  params: {
    q: string;
    appid: string;
  };
};
type weather = {
  // coord:{lon:number,lat:number},
  // weather:[{id:number,main:string,description:string,icon:string}],
  // base:string,
  // main:{temp:number,feels_like:number,temp_min:number,temp_max:number,pressure:number,humidity:number},
  // visibility:number,
  wind:{speed:number,deg:number},
  // clouds:{all:number},
  // dt:number,
  // sys:{type:number,id:number,country:string,sunrise:number,sunset:number},
  // timezone:number,
  // id:number,
  // name:string,
  // cod:string
}




const fetchCurrentWeather = ({ params }: typeParams) => {
 return axios.request<weather>({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather`,
    headers: {
      "Content-type": "application/json"
    },
    params
  });

};

export { fetchCurrentWeather };
