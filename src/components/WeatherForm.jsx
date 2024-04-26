import React, { useState } from 'react';

function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline my-2 mx-5 my-lg-0">
      <input
        className="form-control mr-sm-2 mb-2 mt-2 "
        type="search"
        placeholder="Enter city name"
        aria-label="Search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-success my-2 mx-2 my-sm-0 " type="submit">Search</button>
    </form>
  );
}

export default WeatherForm;
