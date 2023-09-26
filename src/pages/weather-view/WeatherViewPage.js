import React, {useState} from 'react';
import {Box, Container, Card} from '@mui/material';
import { fetchWeatherData } from "../../services/WeatherService"
import SearchBar from "../../components/SearchBar";
import WeatherDisplay from "../../components/WeatherDisplay";
import ErrorDisplay from "../../components/ErrorDisplay"
import { WeatherViewStyles } from "../../styles/ListStyles";

const WeatherViewPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (weatherData) => {
    console.log(" 1......._ weatherData _^^^^^^^^^^^^--> ", JSON.stringify(weatherData, null, 2));
    try {
      const data = await fetchWeatherData(weatherData);
      console.log(" 2......._ data _^^^^^^^^^^^^--> ", JSON.stringify(data, null, 2));
      setWeatherData(data);
      setError('');
    } catch (err) {
      console.log(" 3.0_----ERROR___......._ err _^^^^^^^^^^^^--> ");
      console.log(err);
      setError(err.message);
      setWeatherData(null);
    }
  };
  
  return (
    <React.Fragment>
      <Container >
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            background: "rgba(0, 0, 0, 0)",
            padding: "1vw",
          }}
        >
          <Box style={{display: "flex", justifyContent: "center", flexDirection: "row", padding: "5px"}}>
            <Box>
                <WeatherViewStyles>{"Smart Weather search"}</WeatherViewStyles>
                <SearchBar onSearch={handleSearch} />
                {error && <ErrorDisplay message={error} />}
                <WeatherDisplay data={weatherData} />
            </Box>
          </Box>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default WeatherViewPage;
