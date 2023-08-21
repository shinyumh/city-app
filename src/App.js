// define the overall structure of application

import Search from './comps/search/search';
import CurrentWeather from './comps/current/current-weather';
import CurrentTime from './comps/time/time';
import Forecast from './comps/forecast/forecast';
import './App.css';
import {weatherurl, weatherkey, mapurl, mapkey, timeurl, timeoptions} from './api.js';
import React, { useState, useEffect } from 'react';


function App() {
  // const [message, setmessage] = useState(null);
  const [currentweather, setcurrentweather] = useState(null);
  const [currentmap, setcurrentmap] = useState(null);
  const [currenttime, setcurrenttime] = useState(null);
  const [currentforcast, setcurrentforecast] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //   .then((res) => res.json())
  //   .then((data) => setmessage(data.message));
  // }, []);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);
    const [lat, lon, id] = searchData.value.split(" ");
    const currentweather = fetch(`${weatherurl}/weather?lat=${lat}&lon=${lon}&appid=${weatherkey}&units=imperial`);
    const currentforcast = fetch(`${weatherurl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherkey}&units=imperial`);
    // console.log(searchData.label.split(', ')[1]);
    let currentmap = fetch(`${mapurl}/staticmap?apiKey=${mapkey}&center=lonlat:-96,38.8&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium&zoom=3.5&height=550`);

    if (searchData.label.split(', ')[1] == "Hawaii"){
      currentmap = fetch(`${mapurl}/staticmap?apiKey=${mapkey}&center=lonlat:-157.7,20.65&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium&zoom=6.5&height=550`);
    }
    
    if (searchData.label.split(', ')[1] == "Alaska"){
      currentmap = fetch(`${mapurl}/staticmap?apiKey=${mapkey}&center=lonlat:-153,63&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium&zoom=3&height=550`);
    }

    // console.log(id);
    const currenttime = fetch(`${timeurl}/${id}/dateTime`,timeoptions);

    Promise.all([currentweather,currentmap, currenttime, currentforcast])
    .then (async (response) => {
      const weatherresponse = await response[0].json();
      const mapresponse =  await (response[1]);
      const timeresponse = await response[2].json();
      const forecastresponse = await response[3].json();
      // console.log (timeresponse);
      setcurrentweather({city: searchData.label, ...weatherresponse});
      setcurrentmap({url: mapresponse.url});
      setcurrenttime({timeresponse});
      setcurrentforecast({city: searchData.label, ...forecastresponse});
    })
    .catch((err) => console.log(err));
  };

  // console.log(currentforcast);
  // console.log(currentweather);
  

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
        {currenttime && <CurrentTime data = {currenttime}/>}
      </div>
      <div className="forecastarea">
      {currentforcast && <Forecast data = {currentforcast}/>}
      </div>
    </div>
  );
}

export default App;
