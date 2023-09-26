import React from "react";
import { Card, CardContent, Typography, Grid, Divider, Box} from "@mui/material";
import WeatherIcons from "./WeatherIcons"

const WeatherDisplay = ({ data }) => {
    if (data === null ) return <div></div>;
    console.log("3....**********> WeatherDisplay <********** DATA ", JSON.stringify(data));
    const { temperature, description, humidity, windSpeed, tempMin, tempMax, city, date } = data;

    return (
        <div>
            <Card style={{background: "rgba(229, 241, 241, 0.534)", borderRadius: "10px"}}>
                <CardContent>
                    <Grid container justifyContent="space-evenly" alignItems="center">
                        <Box>
                            {WeatherIcons(description)}
                        </Box>
                        <Box>
                            <Typography variant="h4" gutterBottom color="#0d47a1" fontWeight="500">
                                {date}
                            </Typography>
                            <Typography variant="h3" component="h2" color="#00352c" marginBottom={2}>
                                {city}
                            </Typography>
                            <Typography variant="h5" marginBottom='1px' color="#330e62">
                                {temperature.toFixed(2)}°
                            </Typography>
                            <Typography
                                variant="overline"
                                color="#009688"
                                fontWeight="600"
                                style={{ textDecoration: "underline #009688" }}>
                                    {description}
                            </Typography>
                        </Box>
                    </Grid>
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