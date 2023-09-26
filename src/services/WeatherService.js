import axios from 'axios';
import env from '@ludovicm67/react-dotenv';
import { setCurrentDateFormat } from "../helpers/index"

console.log("API_KEY>>>>>>>>>>>>>>>>>>. ", env)
const API_KEY = env.API_KEY;
const WEATHER_API_URL = env.WEATHER_API_URL;

const errosMessage = {
    isValue: new Error('Failed to send weather API request.'),
    isApi: new Error('Failed to fetch weather data')
}


export const fetchWeatherData = async (weatherData) => {
    if (weatherData === null | undefined) throw errosMessage.isValue;
    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                q: weatherData?.title,
                appid: API_KEY,
                units: 'metric',
            },
        });
        const { main, weather, wind, name, dt, timezone } = response.data;
        const result = {
            city: name,
            date: setCurrentDateFormat(dt, timezone),
            temperature: main.temp,
            description: weather[0]?.description,
            humidity: main.humidity,
            windSpeed: wind.speed,
            tempMin: main.temp_min,
            tempMax: main.temp_max
        }
        return result;
    } catch (error) {
        throw errosMessage.isApi;
    }
};
