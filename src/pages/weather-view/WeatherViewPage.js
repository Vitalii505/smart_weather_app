import React, {useState} from 'react';
import {Box, Container, Card} from '@mui/material';
import { fetchWeatherData } from "../../services/WeatherService"
import SearchBar from "../../components/SearchBar";
import WeatherDisplay from "../../components/WeatherDisplay";
import ErrorDisplay from "../../components/ErrorDisplay"
  
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
      <Container style={{ paddingLeft: "4vw", paddingTop: "20px", display: 'flex', justifyContent: "center"}}>
        <Card
          style={{
            display: "inline-block",
            width: "84vw",
            // height: "28rem",
            background: "#eab3b373",
            position: "relative",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            padding: "10px",
          }}
        >
          <Box style={{display: "flex", justifyContent: "center", flexDirection: "row", marginTop: "1vw"}}>
            <Box>
                <h2 style={{color: 'rgba(112, 11, 11, 0.808)', textAlign: "center", marginBottom: "1vw"}}>Smart Weather Search</h2>
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
