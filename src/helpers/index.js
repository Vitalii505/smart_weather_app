import moment from 'moment';

const dayInSeconds = 86400;
const findDifferDay = (firstDay, secondDay) => secondDay - firstDay;

const setConvertedData = (data, city) => {
  const { dt_txt, dt, main, weather} = data;
  return {
      city: city,
      date: moment(dt_txt).format("DD.MM"),
      dt: dt,
      temperature: main?.temp,
      description: weather[0]?.description
  }
}

export const setCurrentDateFormat = (day, timezone) => {
  const isCurrentDate = (day * 1000) - (timezone * 1000);
  return moment(isCurrentDate).format("DD.MM");
}

export const convertListToWeekdays = (list, city) => {
  let weekDays = [];
  list.forEach((item, i) => {
    if (weekDays.length <= 5) {
      if (weekDays.length === 0) {
        let isDifferDay = findDifferDay(list[0].dt, item.dt)
        if (isDifferDay > dayInSeconds) weekDays.push(setConvertedData(item, city));
      } else {
        let isDiffNextDay = findDifferDay(weekDays[weekDays.length - 1].dt, item.dt)
        if (isDiffNextDay > dayInSeconds) weekDays.push(setConvertedData(item, city));
      }
    };
  })
  return weekDays;
};