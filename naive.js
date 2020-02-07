const nums = [1,3,5]

const sumRange = function(i, j) {
  let sum = 0;
  for (let k = i; k <= j; k++) {
    sum += nums[k];
  }
  return sum;
}

const update = function(i, val) {
  nums[i] = val;
}

console.log(sumRange(0, 2));
update(1, 2);
console.log(sumRange(0, 2));