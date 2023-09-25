import React from "react";
import { Card, CardContent, Typography, Grid, Divider, Box} from "@mui/material";
import Lottie from "lottie-react";
import sunnyAnimation from "../utils/lottie-icons/sunny.json";
import cloudyAnimation from "../utils/lottie-icons/cloudy.json";
import cloudAnimation from "../utils/lottie-icons/cloud.json";
import rainAnimation from "../utils/lottie-icons/rain.json";
import { Help } from "@mui/icons-material";

const getWeatherIcon = (description) => {
        switch (description) {
            case "clear sky":
                return <Lottie animationData={sunnyAnimation} height={100} width={100} />;
            case "few clouds":
            case "scattered clouds":
                return <Lottie animationData={cloudyAnimation} height={100} width={100} />;
            case "broken clouds":
            case "overcast clouds":
                return <Lottie animationData={cloudAnimation} height={100} width={100} />;
            case "light rain":
            case "moderate rain":
            case "heavy intensity rain":
                return <Lottie animationData={rainAnimation} height={100} width={100} />;
            default:
                return <Help />;
        }
};
    

const WeatherDisplay = ({ data }) => {
    if (data === null ) return <div></div>;
    console.log("**********> WeatherDisplay <********** DATA ", JSON.stringify(data));
    const { temperature, description, humidity, windSpeed, tempMin, tempMax, name } = data;
    
    return (
        <div>
            <Card className="weather-card" style={{background: "rgba(229, 241, 241, 0.534)", borderRadius: "10px"}}>
                <CardContent>
                    <Grid container justifyContent="space-evenly" alignItems="center">
                        <Box>
                            {getWeatherIcon(description)}
                        </Box>
                        <Box>
                            <Typography variant="h3" component="h2" marginBottom={2}>
                                {name}
                            </Typography>
                            <Typography variant="h4" marginBottom={2}>
                                {temperature.toFixed(2)}°
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                {description}
                            </Typography>
                        </Box>
                    </Grid>
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
                </CardContent>
            </Card>
        </div>
    );
};

export default WeatherDisplay;