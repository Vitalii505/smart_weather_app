import React from "react";
import { Grid, Box, Typography} from "@mui/material";
import WeatherIcons from "./WeatherIcons"
import {
    BasicWeatherCardStyles,
    WeatherDateParamStyles,
    WeatherCityParamStyles,
    WeatherTemperatureParamStyles,
    WeatherDescriptionParamStyles,
    WeatherCardPaper
} from "../styles/ListStyles"


const WeatherCardsWeek = ({ data }) => {
    if (data === null ) return <></>;

    return (
        <div>
            <div style={{textAlign: "center", color: "#1c2566", marginBottom: "5vw"}}>
                <Typography>Weather for 7-days</Typography>
            </div>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((day, index) => {
                    return <Grid item xs={3} sm={4} md={4} key={index}>
                        <WeatherCardPaper>
                            <BasicWeatherCardStyles>
                                <Box>
                                    {WeatherIcons(day.description)}
                                </Box>
                                <Box>
                                    <WeatherDateParamStyles isWeek={true} >
                                        {day.date}
                                    </WeatherDateParamStyles>
                                    <WeatherCityParamStyles isWeek={true}>
                                        {day.city}
                                    </WeatherCityParamStyles>
                                    <WeatherTemperatureParamStyles isWeek={true}>
                                        {day.temperature.toFixed(2)}°
                                    </WeatherTemperatureParamStyles>
                                    <WeatherDescriptionParamStyles isWeek={true}>
                                        {day.description}
                                    </WeatherDescriptionParamStyles>
                                </Box>
                            </BasicWeatherCardStyles>
                        </WeatherCardPaper>
                    </Grid>
                })}
            </Grid>
        </div>
    );
};

export default WeatherCardsWeek;