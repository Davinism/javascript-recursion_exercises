Array.prototype.subsets = function () {
  if (this.length === 1) {
    return [[], this];
  }
  let resultArr = [];
  const lastElement = this[this.length - 1];

  let subs = this.slice(0, -1).subsets();
  subs.forEach((el) => {
    // console.log(el);

    resultArr.push(el);
    // console.log(resultArr.push(el));
    resultArr.push(el.concat(lastElement));
    // console.log(resultArr.push(el.concat(lastElement)));
  });
  // console.log(resultArr);
  return resultArr;
};

console.log([1, 2, 3].subsets());
