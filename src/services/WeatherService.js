import axios from 'axios';
import env from '@ludovicm67/react-dotenv';

console.log("API_KEY>>>>>>>>>>>>>>>>>>. ", env)
const API_KEY = env.API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const errosMessage = {
    isValue: new Error('Failed to send weather API request.'),
    isApi: new Error('Failed to fetch weather data')
}


export const fetchWeatherData = async (weatherData) => {
    console.log("0.....00000000000000  +++++ SERVICE ++++> ", weatherData);
    if (weatherData === null | undefined) throw errosMessage.isValue;
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: weatherData?.title,
                appid: API_KEY,
                units: 'metric',
            },
        });

        console.log("1.....  +++++ SERVICE ++++> ");
        console.log(response); 

        const { main, weather, wind, name } = response.data;
        const temperature = main.temp;
        const description = weather[0].description;
        const humidity = main.humidity;
        const windSpeed = wind.speed;
        const tempMin = main.temp_min;
        const tempMax = main.temp_max;
        return { temperature, description, humidity, windSpeed, tempMin, tempMax, name };
    } catch (error) {
        throw errosMessage.isApi;
    }
};
