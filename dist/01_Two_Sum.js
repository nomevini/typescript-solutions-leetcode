"use strict";
function twoSum(nums, target) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return answer;
}
function twoSum2(nums, target) { }
const hashMap = new Map();
hashMap.set(3, 2);
console.log(hashMap.get(0));
//# sourceMappingURL=01_Two_Sum.js.map