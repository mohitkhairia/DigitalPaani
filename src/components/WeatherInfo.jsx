import React from 'react';
import './WeatherInfo.css';  

function WeatherInfo({ weather }) {
    const weatherUrl = weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const lowTemp = "https://cdn.icon-icons.com/icons2/3192/PNG/512/cold_wave_thermometer_wind_cold_snowflake_temperature_weather_frozen_icon_194291.png"
    const highTemp = "https://cdn-icons-png.freepik.com/512/7339/7339985.png"
    const tempUrl = weather && weather.main.temp > 25 ? highTemp : lowTemp
    const cloudsImageUrl = "https://i.makeagif.com/media/4-05-2016/utmjeB.gif"
    const clearSkyImageUrl = "https://media.istockphoto.com/id/947314334/photo/blue-sky-with-bright-sun.jpg?s=612x612&w=0&k=20&c=XUlLAWDXBLYdTGIl6g_qHQ9IBBw4fBvkVuvL2dmVXQw="
    const hazySkyImageUrl = "https://64.media.tumblr.com/1e713d8c73608317d25ff42b589e458c/444a9fac32e2d690-4f/s500x750/cfdee415a940f992c8a7c223237315004f06986a.gif"
    const rainySkyImageUrl = "https://i.pinimg.com/originals/c1/a9/3a/c1a93a1d0de0059a3119b8b1a55ce582.gif"
    const circleBacgroundImage = weather && weather.weather[0].main === "Rain" ? rainySkyImageUrl : weather && weather.weather[0].main === "Clouds" ? cloudsImageUrl : weather && weather.weather[0].main === "Clear" ? clearSkyImageUrl : hazySkyImageUrl
  return (
    <div className="weather-clock" >
      {weather ? (
        <div className="circle" style={{
          backgroundImage: `url(${circleBacgroundImage})`, 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          }}>
          <div className="weather-detail temp">
            <div>
              <img src={tempUrl} alt="icon" />
              {weather.main.temp} °C
            </div>
           <p> Feels Like : {weather.main.feels_like} °C </p>
          </div>
          <div className="weather-detail humidity">Humidity: {weather.main.humidity}%</div>
          <div className="weather-detail wind">Wind: {weather.wind.speed} km/h</div>
          <div className="weather-detail description">
            <img src={weatherUrl} alt="icon" />
            {weather.weather[0].description}
            </div>
          <div className="center">{weather.name}</div>
        </div>
      ) : (
        <p className="no-data">No weather data available. Search for a city to display weather information.</p>
      )}
    </div>
  );
}

export default WeatherInfo;
