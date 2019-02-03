/**
 * @param {string[]} ops
 * @return {number}
 */
//还自以为是的声明了一个数组，后来发现js中根本没有栈类，需要用数组来模拟。
var calPoints = function(ops) {
    var stack = [];
    var totalnum = 0;
    for(var ele of ops)                             //遍历数组中的元素
    {
        switch(ele)
        {
            case '+':
                let top=stack[stack.length-1];      //取后两个元素相加再入栈
                let top2=stack[stack.length-2];
                let totaltop=top+top2;
                stack.push(totaltop);
                break;
            case 'D':
                stack.push(stack[stack.length-1]*2);
                break;
            case 'C':
                stack.pop();
                break;
            default:
                stack.push(parseInt(ele));
                break;
        }
    }
    for(var s of stack)
    totalnum+=s;
    return totalnum;
};