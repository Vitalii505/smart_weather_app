import React from "react";
import { Card, CardContent, Typography, Grid, Divider, Box} from "@mui/material";
import WeatherIcons from "./WeatherIcons"
import { BasicWeatherCardStyles, WeatherDateParamStyles, WeatherCityParamStyles, WeatherTemperatureParamStyles, WeatherDescriptionParamStyles } from "../styles/ListStyles"

const WeatherDisplay = ({ data }) => {
    if (data === null ) return <div></div>;
    const { temperature, description, humidity, windSpeed, tempMin, tempMax, city, date } = data;

    return (
        <div>
            <Card style={{background: "rgba(229, 241, 241, 0.634)", borderRadius: "10px"}}>
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
                </CardContent>
            </Card>
        </div>
    );
};

export default WeatherDisplay;