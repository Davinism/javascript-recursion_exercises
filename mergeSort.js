Array.prototype.mergeSort = function () {
  if (this.length <= 1) {
    return this;
  }

  const midpoint = Math.floor(this.length / 2);
  const left = this.slice(0, midpoint);
  const right = this.slice(midpoint);

  return mergeHelper (left.mergeSort(), right.mergeSort());
};

let mergeHelper = function (left, right) {
  const resultArr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      resultArr.push(right.shift());
    }
    else {
      resultArr.push(left.shift());
    }
  }
  return resultArr.concat(left).concat(right);
};


console.log([1, 4, 2, 6, 7, 5].mergeSort());
