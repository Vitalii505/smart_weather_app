import React, {useState} from 'react';
import { Box, Container, Card, Button } from '@mui/material';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import { fetchWeatherData, fetchWeatherForecastData } from "../../services/WeatherService"
import SearchBar from "../../components/SearchBar";
import WeatherDisplay from "../../components/WeatherDisplay";
import WeatherCardsWeek from "../../components/WeatherCardsWeek";
import ErrorDisplay from "../../components/ErrorDisplay"
import { WeatherViewStyles } from "../../styles/ListStyles";

const WeatherViewPage = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isForWeek, setIsForWeek] = useState(false);
  const [weatherForecas, setWeatherForecas] = useState(null);

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

  const renderWeatherCards = async (e, weatherData) => {
    e.preventDefault();
    try {
      const data = await fetchWeatherForecastData(weatherData);
      setWeatherForecas(data)
      setIsForWeek(true) 
    } catch (err) {
      setWeatherForecas(null);
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
              {weatherData &&
                <Button
                  onClick={(e) => renderWeatherCards(e, weatherData)}
                  size="small" 
                  style={{
                    color: "#1c2566",
                    background: "rgba(229, 241, 241, 0.434)",
                    fontSize: "70%",
                    height: "30px"
                  }}>
                    <CalendarViewMonthOutlinedIcon fontSize="large" />
                    for 7-days
                </Button>}
              
              {isForWeek
                ? <WeatherCardsWeek data={weatherForecas} />
                : <></>
              }
            </Box>
          </Box>
        </Card>
        
      </Container>
    </React.Fragment>
  );
};

export default WeatherViewPage;
