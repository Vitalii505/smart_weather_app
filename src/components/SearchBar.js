import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, Paper, styled } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../styles/SearchBar.css"
import dayjs from 'dayjs';

const filter = createFilterOptions();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#eab3b300',
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const placesForWeather  = [
    { title: 'Kiev'},
    { title: 'New York'},
    { title: 'Rome'},
    { title: 'Paris'},
]

const SearchBar = ({ onSearch }) => {
    const [dataObj, setDataObj] = useState(null);
    const [open, toggleOpen] = useState(false);
    const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [dialogValue, setDialogValue] = useState({
        title: '',
        // day: '',
    });

    const handleSearch = () => {
        if (dataObj?.title?.trim() !== '') return onSearch({title: dataObj.title, date: date});
    };

    const handleClose = () => {
        setDialogValue({
            title: '',
        });
        toggleOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDataObj({
            title: dialogValue.title,
            // day: parseInt(dialogValue.day, 10),
        });
            // handleClose();
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <Item style={{border: "node", boxShadow: "none"}}>
                    <Autocomplete
                        value={dataObj}
                        onChange={(event, newValue) => {
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
                                onChange={(event) =>
                                    setDialogValue({
                                        ...dialogValue,
                                        title: event.target.value,
                                    })
                                }
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
                </Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item style={{border: "node", boxShadow: "none"}}>
                    <Button variant="contained" color="warning" onClick={handleSearch} style={{fontSize: "130%", height: "55px"}}>
                        Search
                    </Button>
                </Item>
            </Grid>
        </Grid>
    );
};



export default SearchBar;
