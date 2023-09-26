import moment from 'moment';

export const setCurrentDateFormat = (day, timezone) => {
  const isCurrentDate = (day * 1000) - (timezone * 1000);
  return moment(isCurrentDate).format("DD.MM");
}