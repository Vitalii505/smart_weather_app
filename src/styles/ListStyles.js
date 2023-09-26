import {Paper, Grid, Typography, styled} from "@mui/material"

export const WeatherViewStyles = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    padding: theme.spacing(1),
    color: '#b71c1c',
    fontWeight: "600",
    fontSize: "106%",
    background: "rgba(226, 176, 139, 0.46)",
    boxShadow: '5px 5px #ff6f00',
    border: '0.2px solid #ff6f00',
    borderRadius: "6px",
    marginBottom: "1vw"
}));

export const SearchItemStyles = styled(Paper)(({ theme }) => ({
    backgroundColor: '#eab3b300',
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    width: 360,
    boxShadow: '5px 5px #ff6f00',
    border: '0.2px solid #ff6f00',
    color: 'white',
    marginBottom: "2vw"
}));

export const BasicWeatherCardStyles = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems:"center"
}));

export const WeatherDateParamStyles = styled(Typography)(() => ({
    variant: "h4",
    color: "#0d47a1",
    fontWeight: "500"
}));

export const WeatherCityParamStyles = styled(Typography)(() => ({
    variant: "h3",
    component: "h2",
    color: "#00352c",
    marginBottom: "2"
}));

export const WeatherTemperatureParamStyles = styled(Typography)(() => ({
    variant: "h5",
    color: "#330e62",
    marginBottom: "1px"
}));

export const WeatherDescriptionParamStyles = styled(Typography)(() => ({
    variant: "overline",
    color: "#009688",
    fontWeight: "600",
    textDecoration: "underline #009688"
}));