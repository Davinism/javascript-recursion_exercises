let makeChange = function(value, coinsArr) {
  if (coinsArr.includes(value)) {
    return value;
  }
  if (value <= 0) {
    return [];
  }

  if (value >= coinsArr[0]) {
    return [coinsArr[0]].concat(makeChange(value - coinsArr[0], coinsArr));
  }
  else {
    coinsArr.shift();
    return makeChange(value, coinsArr);
  }
};

// console.log(makeChange(37, [25, 10, 5, 1]));


let betterChange = function(value, coinsArr) {
  if (coinsArr.includes(value)) {
    return value;
  }
  if (value <= 0) {
    return [];
  }
  let changeArr = [];
  coinsArr.forEach((coin) => {
    if (value >= coin) {
      changeArr.push([coin].concat(betterChange(value - coin, coinsArr)));
    }
  });

  let minimumChanges = changeArr[0];
  changeArr.slice(1).forEach((changes) => {
    if (minimumChanges.length > changes.length) {
      minimumChanges = changes;
    }
  });

  return minimumChanges;
};

console.log(betterChange(24, [10, 7, 1]));
