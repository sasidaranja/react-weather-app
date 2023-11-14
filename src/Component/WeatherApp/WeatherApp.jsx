import React from 'react'
import './WeatherApp.css'
import searchicon from '../Assests/search_icon.png'
import cloudicon from '../Assests/cloud_icon.png'
import humidicon from '../Assests/humidity_icon.png'
import windicon from '../Assests/wind_icon.png'
// import rainicon from '../Assests/rain_icon.png'
// import snowicon from '../Assests/snow_icon.png'
// import clearicon from '../Assests/clear_icon.png'
// import drizzleicon from '../Assests/drizzle_icon.png'

const WeatherApp = () => {
  let api_key = "142ed569f4e46c3de263572891c9570e"
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if(element[0].value === ""){
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
  
    let response = await fetch(url);
    let data = await response.json();

    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");


    temperature[0].innerHTML = Math.ceil(data.main.temp) + "°C";
    location[0].innerHTML = data.name;
    wind[0].innerHTML = data.wind.speed;
    humidity[0].innerHTML = data.main.humidity;
  }
  return (
    
    <div className="container">
        
        <div className="top-bar">
            <input type="text" placeholder="search" className="cityInput" />
            <div className="search">                
                <img src={searchicon} alt="" className="search-icon" onClick={()=>{search()}} />
            </div>
        </div>
        
        <div className="weather-image">
            <img src={cloudicon} alt="" className="cloud-icon" />
        </div>
        <div className="weather-temp">30°c</div>
        <div className="weather-location">Chennai</div>
        
        <div className="data-container">
          
          <div className="element">
            <img src={humidicon} alt="humidity" className='icon' />
            <div className="data">
              <div className="humidity-percent">14%</div>
              <div className="text">Humidity</div>                        
            </div>
          </div>
          
          <div className="element">
            <img src={windicon} alt="windrate" className='icon'/>
            <div className="data">
              <div className="wind-rate">18km/hr</div>
              <div className="text">WindSpeed</div>                        
            </div>
          </div>

        </div>
    </div>
    )
}

export default WeatherApp