class BIT {
  constructor(nums) {
    this.nums = nums;

    this.n = nums.length;

    this.BIT = new Array(this.n + 1).fill(0);
    for (let i = 0; i < this.n; i++) {
      this.init(i, nums[i]);
    }
  }

  init(i, val) {
    i++;
    while (i <= this.n) {
      this.BIT[i] += val;
      i += (i & -i);
    }
  }

  update(i, val) {
    const diff = val - this.nums[i];
    this.nums[i] = val;
    this.init(i, diff);
  }

  getSum(i) {
    let sum = 0;
    i++;
    while (i > 0) {
      sum += this.BIT[i];
      i -= (i & -i);
    }
    return sum;
  }

  sumRange(i, j) {
    return this.getSum(j) - this.getSum(i - 1);
  }
}

const nums = [1,3,5];
const bit = new BIT(nums);
console.log(bit.sumRange(0, 2));
bit.update(1, 2);
console.log(bit.sumRange(0, 2));