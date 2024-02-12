import Header from './Header'
import Footer from './Footer'
import Input from './Input'
import { useEffect, useState } from 'react'
import Display from './Display';

function App() {
  const [searchValue,setSearchValue] = useState('');
  const [visibleValue,setVisibleValue] = useState(true);
  var lat = 0.0;
  var lon = 0.0;
  const [error,setError] = useState(null);
  const [weatherData,setWeatherData] = useState(null);
  useEffect(() => {
    setSearchValue('');
    setVisibleValue(true);
    setError(null);
    setWeatherData(null);
  },[])
  const API_key="c88bf230ab307e8b78c8e716d7b01e1e";
  const WEATHER_URL="https://api.openweathermap.org/data/2.5/weather?"
  const CITY_URL=`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${API_key}`
  const fetchData= async () => {
    try{
      const response = await fetch(CITY_URL);
      if(!response.ok) 
        throw Error('could not fetcg=h data propoerly');
      const data = await response.json();
      lat = (data[0].lat);
      lon = (data[0].lon);
      const resp = await fetch(WEATHER_URL+"lat="+lat+"&lon="+lon+`&appid=${API_key}`+"&units=metric");
      if(!resp.ok) 
        throw Error('could not fetch data propoerly');
      const dat = await resp.json();
      setWeatherData(dat);
      setError(null);
    }catch(err) {
      setError(err.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleValue(false);
    fetchData();
    setSearchValue('');
  }
  return (
    <div className="App">
      <Header />
      {error ? <h1 style={{color: "red"}}>{error}</h1> : (weatherData ? <Display 
        visibleValue={visibleValue}
        weatherData={weatherData}
      /> : <h1 style={{color: "white" , visibility: visibleValue ? "hidden" : "visible"}}>NO DATA</h1>)}
      <Input 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
        visibleValue={visibleValue}
      />
      <Footer />
    </div>
  );
}

export default App;
