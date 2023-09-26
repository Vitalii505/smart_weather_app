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
  const [isForWeek, setIsForWeek] = useState(false);

  const handleSearch = async (weatherData) => {
    try {
      const data = await fetchWeatherData(weatherData);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const getWeatherForWeek = (setForWeek) => {
    if (setForWeek) {
      setIsForWeek(setForWeek);
    }
  }
  
  return (
    <React.Fragment>
      <Container >
        <Card
          display="flex"
          justifyContent="center"
          flexDirection="row"
          alignContent="center"
          padding="1vw"
          style={{background: "rgba(0, 0, 0, 0)"}}
        >
          <Box display="flex" justifyContent="center"  flexDirection="row" padding="1vw">
            <Box>
              <WeatherViewStyles>{"Smart Weather search"}</WeatherViewStyles>
              <SearchBar onSearch={handleSearch} />
              {error && <ErrorDisplay message={error} />}
              <WeatherDisplay data={weatherData} setForWeek={getWeatherForWeek} />
            </Box>
            <Box marginLeft="4vw">
              {isForWeek ? <p> Weather on 7-days </p> : <></>}
            </Box>
          </Box>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default WeatherViewPage;
