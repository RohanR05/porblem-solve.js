function checkLeapYear(str) {
  if (str % 4 === 0 && str % 100 !== 0) {
    return true;
  } else if (str % 400 === 0) {
    return true;
  }
  return false;
}
str = [2000];
const year = checkLeapYear(str);
console.log(year);
