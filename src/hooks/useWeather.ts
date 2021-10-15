import React, {useState} from 'react'
import {fetchCurrentWeather} from 'services/weather'

const useWeather = () => {
    const [data, setData] = useState<any>({})
    const [status, setStatus] = useState<string>('idle')
    const [location, setLocation] = useState<string>('Athens')
  
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocation(e.target.value)
    }
  
    const fetchData = async () => {
      setStatus('loading')
      try {
        const {data} = await fetchCurrentWeather({
          params: {q: location, appid: 'ebc8de08ce3579cf444b51c12772a8bc'},
        })
  
        setData(data)
        setStatus('success')
      } catch (err) {
        console.log(err)
        setStatus('error')
      }
    }

    
    return {data,location, status, handleOnChange, fetchData}
}

export default useWeather
