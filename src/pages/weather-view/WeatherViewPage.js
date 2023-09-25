import React, {useState} from 'react';
import {Box, Container, Card} from '@mui/material';
import { fetchWeatherData } from "../../services/WeatherService"
import SearchBar from "../../components/SearchBar";
import WeatherDisplay from "../../components/WeatherDisplay";
  
const WeatherViewPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (weatherData) => {
    try {
      const data = await fetchWeatherData(weatherData);
      console.log("^^^^^^^^^^^^^^^_ DATA _^^^^^^^^^^^^^^^ ");
      console.log(data);
      console.log("^^^^^^^^^^^^^^^_ DATA _^^^^^^^^^^^^^^^ ");
      setWeatherData(data);
      setError('');
    } catch (err) {
      console.log("^^^^^^^^^^^^^^^_ ERROR _^^^^^^^^^^^^^^^ ");
      console.log(err.message);
      console.log("^^^^^^^^^^^^^^^_ ERROR _^^^^^^^^^^^^^^^ ");
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
                <WeatherDisplay data={weatherData} />
            </Box>
          </Box>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default WeatherViewPage;
