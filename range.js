let range = function(startVal, endVal) {
  if (endVal - startVal === 1) {
    return [startVal, endVal];
  }

  let range1 = range(startVal, endVal - 1);
  range1.push(endVal);
  return range1;
};

console.log(range(0, 5));
