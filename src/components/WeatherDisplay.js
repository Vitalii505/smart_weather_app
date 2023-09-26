import React from "react";
import { Card, CardContent, Typography, Grid, Divider, Box, IconButton} from "@mui/material";
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import WeatherIcons from "./WeatherIcons"
import { BasicWeatherCardStyles, WeatherDateParamStyles, WeatherCityParamStyles, WeatherTemperatureParamStyles, WeatherDescriptionParamStyles } from "../styles/ListStyles"

const WeatherDisplay = ({ data, setForWeek }) => {
    if (data === null ) return <div></div>;
    console.log("3....**********> WeatherDisplay <********** DATA ", JSON.stringify(data));
    const { temperature, description, humidity, windSpeed, tempMin, tempMax, city, date } = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        setForWeek(true);
    };

    return (
        <div>
            <Card style={{background: "rgba(229, 241, 241, 0.534)", borderRadius: "10px"}}>
                <CardContent>
                    <BasicWeatherCardStyles>
                        <Box>
                            {WeatherIcons(description)}
                        </Box>
                        <Box>
                            <WeatherDateParamStyles>
                                {date}
                            </WeatherDateParamStyles>
                            <WeatherCityParamStyles>
                                {city}
                            </WeatherCityParamStyles>
                            <WeatherTemperatureParamStyles>
                                {temperature.toFixed(2)}°
                            </WeatherTemperatureParamStyles>
                            <WeatherDescriptionParamStyles>
                                {description}
                            </WeatherDescriptionParamStyles>
                        </Box>
                    </BasicWeatherCardStyles>
                    <div style={{color: "#093170"}}>
                        <Divider sx={{ my: 1 }} />
                        <Grid container textAlign="center">
                            <Grid item sm={6}>
                                <Typography>
                                    Min/Max
                                </Typography>
                            </Grid>
                            <Grid item sm={6}>
                                <Typography>
                                    {tempMin.toFixed(2)}°/{tempMax.toFixed(2)}°
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 1 }} />
                        <Grid container textAlign="center">
                            <Grid item sm={6}>
                                <Typography>
                                    Humidity
                                </Typography>
                            </Grid>
                            <Grid item sm={6}>
                                <Typography>
                                    {humidity}%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 1 }} />
                        <Grid container textAlign="center">
                            <Grid item sm={6}>
                                <Typography>
                                    Wind Speed
                                </Typography>
                            </Grid>
                                <Grid item sm={6}>
                                    <Typography>
                                        {windSpeed} M/s
                                    </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div >
                        <form
                            onSubmit={handleSubmit}
                            style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "1vw" }}>
                                <IconButton type="submit">
                                    <CalendarViewMonthOutlinedIcon fontSize="large" />
                                </IconButton>
                            <p>7-days</p>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default WeatherDisplay;