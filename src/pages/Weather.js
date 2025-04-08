    import '../assets/styles/Weather.css';
    import React, { useEffect } from "react";
    import { getWeather } from "../services/WeatherService";
    import { useState } from "react";

    const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    async function fetchWeather() {
        try {
        const response = await getWeather(search);
        setCity(response);
        } catch (error) {
        console.log(error.message);
        }
    }

        useEffect(()=>{
            fetchWeather()
        },)
        


    return (
        <div className='weather'>
        <div className="box">
            <div className="inputData">
            <input
                type="search"
                className="inputField"
                onChange={(e) => {
                setSearch(e.target.value);
                }}
                value={search}
            />
            <button onClick={() => fetchWeather()}>Search</button>
            </div>

            {!city || !city.main ? (
            <p>No Data Found</p>
            ) : (
            <div>
                <div className="info">
                <h2 className="location">
                    <i class="fa-solid fa-street-view"></i>
                    {city.name}
                </h2>
                <h1 className="temp">{city.main.temp}</h1>
                <h3 className="tempmin_max"> Min: {(city.main.temp_min).toFixed(2)}°C | Max: {(city.main.temp_max).toFixed(2)}°C </h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
            )}
        </div>
        </div>
    );
    };

    export default Weather;
