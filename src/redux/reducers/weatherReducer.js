const initialState = {
    currentWeather: null,
    weeklyWeather: [],
};

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const SET_WEEKLY_WEATHER = 'SET_WEEKLY_WEATHER';

export const setCurrentWeather = (data) => ({
    type: SET_CURRENT_WEATHER,
    payload: data,
});

export const setWeeklyWeather = (data) => ({
    type: SET_WEEKLY_WEATHER,
    payload: data,
});

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
        return {
            ...state,
            currentWeather: action.payload,
        };
        case SET_WEEKLY_WEATHER:
        return {
            ...state,
            weeklyWeather: action.payload,
        };
        default:
        return state;
    }
};

export default weatherReducer;
