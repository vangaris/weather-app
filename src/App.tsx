import Knots from '../src/components/Knots'

import SearchInput from 'components/InputSearch'
import Button from 'components/Button'
import useWeather from 'hooks/useWeather'

const App = () => {
  const {data, location, status, handleOnChange, fetchData} = useWeather()

  return (
    <div className="App">
      <SearchInput location={location} handleOnChange={handleOnChange} />
      <Button location={location} handleOnClick={fetchData} />
      {status === 'loading' ? (
        <h1> loading...</h1>
      ) : status === 'success' ? (
        <>
          <Knots knots={data?.wind?.speed} />
          {data?.weather?.length && <div>{data?.weather[0]?.description}</div>}
          country: {data?.sys?.country}
        </>
      ) : (
        status === 'error' && <h1> Data not found </h1>
      )}
    </div>
  )
}

export default App
