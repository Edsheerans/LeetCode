/**
 * @param {string} s
 * @return {boolean}
 */
//思路：遇见一个左括号，将对应的右括号入栈，遇见有括号和栈顶比较，不相同则为不匹配，相同则出栈，最后栈应为空。
//若栈内还有元素，则表示有尚未匹配的，则返回false。
var isValid = function(s) {
    var stack= [];
    for(var c of s)
    {
        if (c=="(") stack.push(")");
        else if (c=="{") stack.push("}");
        else if (c=="[") stack.push("]");
        else
        {
            if(stack.length==0) return false;
            if(stack.pop()!=c) return false;
        }
    }
    return stack.length===0;
};