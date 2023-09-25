import React from 'react';

const WeatherDisplay = ({ data }) => {
    if (data === null | undefined) return null;
    console.log("**********> WeatherDisplay <********** DATA ");
    console.log(data);
    const { temperature, description, humidity, windSpeed } = data;

    return (
        <div className="weather-display">
        <p>Temperature: {temperature}°C</p>
        <p>Description: {description}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} m/s</p>
        </div>
    );
};

export default WeatherDisplay;