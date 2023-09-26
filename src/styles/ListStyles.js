import {Paper, styled} from "@mui/material"

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