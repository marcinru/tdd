export const twoSum = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const guess = hashMap[target - nums[i]];
        if (guess != null) {
            return [guess,i];
        }
        hashMap[nums[i]] = i;
    }
}
