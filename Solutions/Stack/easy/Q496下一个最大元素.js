/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * 思路：
 * 先遍历较大数组nums2，利用栈构成每个元素与其下一个最大元素键值对存入map，不存在不存入。
 * 再遍历较小数组，在map中找寻是否存在key，如果存在返回value，不存在返回-1，存入结果数组。
 */
var nextGreaterElement = function(nums1, nums2) {
    var map=new Map();
    var stack=[];
    var result = [];
    for(var num2 of nums2)
    {
        /*这里采用while还是if的问题：
           如果是if语句的话只判断一次，如果nums2=[6,5,4,3,2,1,7],if只会7与当前栈顶1比较，然后存入1,7,
        前面的65432就不会做比较，while语句是与每个栈顶都进行比较，只要满足条件就进入循环体，该栈顶出栈了
        再继续与下一栈顶比较，直到小于该栈顶或栈为空才退出循环。之所以用while不用if，是可能会出现几个
        越来越小的数都压入栈内，需要依次循环比较，弄了好一会用if测试出来的问题才明白*/
        while((stack.length!==0)&&(num2>stack[stack.length-1]))
        {
            let top=stack[stack.length-1];
            map.set(top,num2);
            stack.pop();
        }
        stack.push(num2);
    }
    for(var num1 of nums1)
    {
        if(map.has(num1))
            result.push(map.get(num1));
        else
            result.push(-1);
    }
    return result;
};