let exp = function (base, pow) {
  if (pow === 0) {
    return 1;
  }
  return base * exp(base, pow - 1);
};

let exp2 = function (base, pow) {
  if (pow === 0) {
    return 1;
  }
  else if (pow === 1) {
    return base;
  }

  if (pow % 2 === 0) {
    return Math.pow(exp2(base, pow / 2), 2);
  }
  else {
    return base * Math.pow(exp2(base, (pow - 1) / 2), 2);
  }

};


console.log(exp(5, 3));
console.log(exp2(5, 3));
