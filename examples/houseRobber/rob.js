export function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prevMax = 0;
  let currMax = 0;

  for (let num of nums) {
    let temp = currMax;
    currMax = Math.max(currMax, prevMax + num);
    prevMax = temp;
  }

  return currMax;
}
