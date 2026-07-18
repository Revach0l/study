var twoSum = function(nums, target) {
    let len = nums.length
    console.log(len);
    if (len < 2) {
        return null;
    }
    let objects = {};
    for (let i = 0; i < len ; num++) {
        num = nums[i];
        console.log(num);
        if (target - num in objects) {
            return [nums[objects[target - num]], num];
        } else {
            objects[num] = i;
        }
    }
    //return null;
};

res = twoSum([2,7,11,15], 9);
console.log(res);