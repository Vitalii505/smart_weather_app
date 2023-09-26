import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { paths } from "../../constants";

const Home = ({ history }) => {
    const styleButtons = { marginBottom: "0.5rem", borderRadius: "5px" };
    const buttons = [
        <Button
            onClick={async ()=> await history.push(paths.user.weatherView())}
            key="demo"
            style={styleButtons}>
                Start project demo
        </Button>,
        <Button
            onClick={()=> window.open("https://github.com/Vitalii505/smart_weather_app")}
            color='inherit'
            key="github"
            style={styleButtons}>
                <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                        fontSize: "160%",
                        marginRight: '0.5rem',
                    }}
                />
                GitHub
        </Button>,
        <Button
            onClick={async ()=> await history.push(paths.login())}
            color='inherit'
            key="three"
            style={styleButtons}>
            <FontAwesomeIcon
                icon={faUser}
                style={{
                    fontSize: "160%",
                    marginRight: '0.5rem',
                }}
            />
            Login
        </Button>,
    ];
    
    return (
        <div>
            <div className="App-header" style={{marginBottom: "5rem"}}>
                <h2 className="text-header" style={{color: "#e3f2fd"}}>Smart Weather App</h2>
            </div>
            <form className="demoForm" style={{ display: "flex", justifyContent: 'center', margin: "auto" }}>
                <Box
                    sx={{
                        display: 'flex',
                        '& > *': {
                        m: 1,
                        },
                    }}
                >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="contained"
                    >
                        {buttons}
                    </ButtonGroup>
                </Box>
            </form>
        </div>
        
    );
}
export default Home;
