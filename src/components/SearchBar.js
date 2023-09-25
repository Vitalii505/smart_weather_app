import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import SearchItemStyles from "../styles/SearchItemStyles"

const filter = createFilterOptions();

const placesForWeather  = [
    { title: 'Kiev'},
    { title: 'New York'},
    { title: 'Rome'},
    { title: 'Paris'},
]

const convertDate = (day) => day !== null ? moment(day).format("MM-DD-YYYY") : moment().format("MM-DD-YYYY");

const SearchBar = ({ onSearch }) => {
    const [dataObj, setDataObj] = useState({title: ''});
    const [open, toggleOpen] = useState(false);
    const [date, setDate] = useState(null);
    const [dialogValue, setDialogValue] = useState('');

    const handleSearch = () => {
        setDialogValue({
            title: dialogValue.title,
        });
        const currentDate = date === null ? convertDate(null) : convertDate(date);
        const title = dataObj?.title
        console.log(title);
        if (typeof title === 'string') {
            if (title?.length > 0) {
                onSearch({ title: title, date: currentDate?.toString() });
            }
        };
    };

    const handleClose = () => {
        setDialogValue({
            title: '',
        });
        toggleOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDataObj({title: dialogValue.title,});
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <SearchItemStyles>
                    <Autocomplete
                        value={dataObj}
                        onChange={(e, newValue) => {
                            if (typeof newValue === 'string') {
                                setTimeout(() => {
                                    toggleOpen(true);
                                    setDialogValue({
                                        title: newValue,
                                    });
                                });
                            } else if (newValue && newValue.inputValue) {
                                toggleOpen(true);
                                setDialogValue({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setDataObj(newValue);
                            }
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            if (params.inputValue !== '') {
                                    filtered.push({
                                    inputValue: params.inputValue,
                                    title: `Add "${params.inputValue}"`,
                                });
                            }
                            
                            return filtered;
                        }}
                        id="free-solo-dialog-demo"
                        options={placesForWeather}
                        getOptionLabel={(option) => {
                            if (typeof option === 'string') {
                                return option;
                            }
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            return option.title;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        renderOption={(props, option) => <li {...props}>{option.title}</li>}
                        sx={{ width: 300 }}
                        freeSolo
                        renderInput={(params) => <TextField {...params} label="Search by city" />}
                    />
                    <Dialog open={open} onClose={handleClose}>
                        <form onSubmit={handleSubmit}>
                            <DialogTitle>Search by City & Day</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Select or enter the city and date to search the data weather
                                    </DialogContentText>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                label="Weather day"
                                                value={date}
                                                onChange={(newDate) => setDate(newDate)}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <TextField
                                        fullWidth={true}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        value={dialogValue.title}
                                        onChange={(event) => setDialogValue({
                                            ...dialogValue,
                                            title: event.target.value,
                                        })}
                                        label="City"
                                        type="text"
                                        variant="standard"
                                    />
                                </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleSearch} type="submit">Search</Button>
                            </DialogActions>
                        </form>
                    </Dialog>
                </SearchItemStyles>
            </Grid>
            <Grid item xs={6} md={4}>
                <SearchItemStyles>
                    <Button variant="contained" color="warning" onClick={handleSearch} style={{fontSize: "130%", height: "55px"}}>
                        Search
                    </Button>
                </SearchItemStyles>
            </Grid>
        </Grid>
    );
};



export default SearchBar;
