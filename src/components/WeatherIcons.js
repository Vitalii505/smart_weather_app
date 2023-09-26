import Lottie from "lottie-react";
import sunnyAnimation from "../styles/lottie-icons/sunny.json";
import cloudyAnimation from "../styles/lottie-icons/cloudy.json";
import cloudAnimation from "../styles/lottie-icons/cloud.json";
import rainAnimation from "../styles/lottie-icons/rain.json";
import { Help } from "@mui/icons-material";

const WeatherIcons = (description) => {
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

export default WeatherIcons;