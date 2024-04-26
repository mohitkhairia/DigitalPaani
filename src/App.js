import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import clouds from './images/clouds.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weather, setWeather] = useState(null);
  const API_KEY = "c31bee34bbe983ae53125cddb5590acf";
  const handleSearch = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        alert("City not found!");
      });
  };

  return (
    <div className=".app" style={{
       backgroundImage: `url(${clouds})`,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
       }}>
      <WeatherForm onSearch={handleSearch} />
      <WeatherInfo weather={weather} />
    </div>
  );
}

export default App;
