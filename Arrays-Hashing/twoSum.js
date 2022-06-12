// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
    for (let i0 = 0; i0 < nums.length; i0++) {
        for (let i1 = i0 + 1; i1 < nums.length; i1++) {
            if (nums[i0] + nums[i1] === target) {
                return [i0, i1];
            }
        }
    }
}

console.log(twoSum([1, 2, 3, 4, 5], 7));
