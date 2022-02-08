export default (e, withHour = false) => {
  return (
    `${(`0${e.getDate()}`).substr(-2)}/${
      (`0${e.getMonth() + 1}`).substr(-2)}/${e.getFullYear()} ${withHour ? `${e.getHours() < 10 ? `0${e.getHours()}` : e.getHours()}:${e.getMinutes() < 10 ? `0${e.getMinutes()}` : e.getMinutes()}` : ''}`
  );
}
