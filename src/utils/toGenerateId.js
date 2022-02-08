export default (str) => {
  let bool = true;
  let tmp;
  while (bool) {
    tmp = `${str}${Math.random()}`;
    if (document.getElementById(tmp) === null) {
      bool = false;
    }
  }
  return tmp;
};
