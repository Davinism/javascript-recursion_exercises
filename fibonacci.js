// 0, 1, 1, 2, 3, 5

let fibonacci = function(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  let fibArr = fibonacci(n - 1);
  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  return fibArr;
};

console.log(fibonacci(6));
