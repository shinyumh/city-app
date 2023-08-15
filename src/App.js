// define the overall structure of application

import Search from './comps/search/search';
import CurrentWeather from './comps/current/current-weather';
import './App.css';
import {weatherurl, weatherkey, mapurl, mapkey} from './api.js';
import React, { useState } from 'react';


function App() {
  const [currentweather, setcurrentweather] = useState(null);
  const [currentmap, setcurrentmap] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentweather = fetch(`${weatherurl}/weather?lat=${lat}&lon=${lon}&appid=${weatherkey}&units=imperial`);
    // console.log(searchData.label.split(', ')[1]);
    let currentmap = fetch(`${mapurl}/staticmap?apiKey=${mapkey}&center=lonlat:-96,38.8&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium&zoom=3.5&height=550`);

    if (searchData.label.split(', ')[1] == "Hawaii"){
      currentmap = fetch(`${mapurl}/staticmap?apiKey=${mapkey}&center=lonlat:-157.7,20.65&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium&zoom=6.5&height=550`);
    }
    
    if (searchData.label.split(', ')[1] == "Alaska"){
      currentmap = fetch(`${mapurl}/staticmap?apiKey=${mapkey}&center=lonlat:-153,63&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium&zoom=3&height=550`);
    }

    Promise.all([currentweather,currentmap])
    .then (async (response) => {
      const weatherresponse = await response[0].json();
      const mapresponse =  await (response[1]);
      // console.log (mapresponse)
      setcurrentweather({city: searchData.label, ...weatherresponse});
      setcurrentmap({url: mapresponse.url});
    })
    .catch((err) => console.log(err));
  };

  // console.log(currentmap);
  

  return (
    // anything inside a div is a componenet
    <div className="container">
      <div className="title"><h2>Cities in the U.S.</h2></div>
      <Search onSearchChange={handleOnSearchChange} />
      <div className="weatherarea">
      {currentweather && <CurrentWeather data = {currentweather}/>}
      </div>
      <div className = "mapping">
      {currentmap ? (
        <img className = "image" src={currentmap.url} alt="API Image" />
      ) : (
        <p>Loading image...</p>
      )}
      </div>
      <div className="timearea">
        <CurrentTime data = {currentweather}/>
      </div>
    </div>
  );
}

export default App;
