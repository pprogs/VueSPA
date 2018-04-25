export const Sum = (a, b) => {
  return a + b;
};

export const FormatNumber = number => {
  if (number < 1000) {
    return "" + number;
  }

  let i = -1;
  while(number > 1000) {
      i++;
      number = number / 1000;
  }

  const suf = [ 'K', 'M', 'T' ]

  if (number > 100) {
      number |= 0;
  } else {
      //number = Math.round((number + 0.00001) * 100) / 100
      number = Number(number.toFixed(2));
  }
  return number + suf[i];
};
