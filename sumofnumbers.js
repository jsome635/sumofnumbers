const numbers = [1, 2, 3, 4];

function sumFor(numList) {
  let sum = 0;
  for (const num of numList) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(numbers));

function sumWhile(numList) {
  let count = 0;
  let sum = 0;
  while (count < numList.length) {
    sum += numList[count];
    count++;
  }
  return sum;
}

console.log(sumWhile(numbers));

function sumRecursion(numList) {
  if (numList.length === 0) return 0;
  return numList[0] + sumRecursion(numList.slice(1, numList.length));
}

console.log(sumRecursion(numbers));

function sumTheSimpleWay(numList) {
  return _.reduce(numList, function (memo, num) {
    return memo + num;
  });
}

console.log(sumTheSimpleWay(numbers));
