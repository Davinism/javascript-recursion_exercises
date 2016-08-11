let bsearch = function(array, target) {

  if (array.length === 0) {
    return null;
  }
  if (array.length === 1) {
    if (array[0] === target) {
      return 0;
    }
    else {
      return null;
    }
  }

  const midpoint = Math.floor(array.length / 2);

  if (target > array[midpoint]) {
    const bresult = bsearch(array.slice(midpoint + 1), target);
    if (bresult === null) {
      return null;
    }
    else {
      return midpoint + 1 + bresult;
    }
  }
  else if (target === array[midpoint]) {
    return midpoint;
  }
  else {
    return bsearch(array.slice(0, midpoint), target);
  }

};

console.log(bsearch([1, 2, 3, 4, 6, 7, 8, 9], 7));
