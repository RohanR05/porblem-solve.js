function discountPrice(str) {
  if (str < 99) {
    return str - str * 0.1;
  } else if (str > 100) {
    return str - str * 0.2;
  }
}

str = 180;
const price = discountPrice(str);
console.log(price);
