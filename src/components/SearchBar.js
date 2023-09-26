import React, { useState } from 'react';
import { Grid, InputBase, IconButton, Typography } from '@mui/material/';
import { Search } from '@mui/icons-material';
import { SearchItemStyles } from "../styles/ListStyles"

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");
    const [invalidCity, setInvalidCity] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === "") {
            setInvalidCity(true);
            return;
        }
        setInvalidCity(false);
        onSearch({title: city}); 
    };

    return (
        <Grid container justifyContent="center" flexDirection="column" sx={{ pt: '20px' }}>
            <form onSubmit={handleSubmit}>
                <SearchItemStyles>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Enter a City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }}>
                        <Search />
                    </IconButton>
                </SearchItemStyles>
            </form>
            {invalidCity && <Typography marginLeft="1vw" color="#b71c1c">Please enter a city</Typography>}
        </Grid>
    );
};

export default SearchBar;
