/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//方法：双层遍历，hash，双指针左右开始扫描
//暴力解决法双层遍历
//twoSum是一个函数
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]+nums[j] === target)
               return [i,j];
        }
    }
};
//Hash哈希表
var twoSum = function(nums, target) {
   const map=new Map();
   for(let i=0;i<nums.length;i++)
   {
       if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
       }
        map.set(nums[i],i);
   }
};
