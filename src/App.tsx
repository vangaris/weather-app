import WindSpeedView from './components/WindSpeedView'

import SearchInput from 'components/InputSearch'
import Button from 'components/Button'
import useWeather from 'hooks/useWeather'

const App = () => {
  const {weatherData, speed, location, status, handleOnChange, fetchData} =
    useWeather()

  const isLoading = status === 'loading'
  const hasError = status === 'error'
  return (
    <div className="App">
      <SearchInput location={location} handleOnChange={handleOnChange} />
      <Button location={location} handleOnClick={fetchData} />
      {isLoading ? (
        <h1> loading...</h1>
      ) : status === 'success' ? (
        <>
          <WindSpeedView speed={speed} />
          {weatherData?.weather?.length && (
            <div>{weatherData?.weather[0]?.description}</div>
          )}
          country: {weatherData?.sys?.country}
        </>
      ) : (
        hasError && <h1> Data not found </h1>
      )}
    </div>
  )
}

export default App
