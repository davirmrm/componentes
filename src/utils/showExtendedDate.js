const translateMonth = (month) => {
  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return months[month];
};

/* eslint-disable no-param-reassign */
export default (date) => {
  date = new Date(date);
  return (`${(`0${date.getDate()}`).substr(-2)} ${translateMonth(date.getMonth())} ${date.getFullYear()}`);
};
