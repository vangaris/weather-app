import React, {useState} from 'react'
import {fetchCurrentWeather} from 'services/weather'

const useWeather = () => {
    const [weatherData, setWeatherData] = useState<any>()
    const [speed, setSpeed] = useState<number>(0)
    const [status, setStatus] = useState<string>('idle')
    const [location, setLocation] = useState<string>('')
  
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocation(e.target.value)
    }
  
    const fetchData = async () => {
      setStatus('loading')
      try {
        const {data} = await fetchCurrentWeather({
          params: {q: location, appid: 'ebc8de08ce3579cf444b51c12772a8bc'},
        })
        console.log(data)
        setWeatherData(data)
        setSpeed(data.wind.speed)
        setStatus('success')
      } catch (err) {
        console.log(err)
        setStatus('error')
      }
    }

    
    return {weatherData,speed,location, status, handleOnChange, fetchData}
}

export default useWeather
