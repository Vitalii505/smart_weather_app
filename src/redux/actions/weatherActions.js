import { setCurrentWeather, setWeeklyWeather } from '../reducers/weatherReducer';

export const fetchCurrentWeather = (data) => (dispatch) => dispatch(setCurrentWeather(data));

export const fetchWeeklyWeather = (data) => (dispatch) => dispatch(setWeeklyWeather(data));
