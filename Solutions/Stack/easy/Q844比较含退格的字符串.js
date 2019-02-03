/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
//思路：用栈来存储两个字符串，遇到#出栈弹出，最后将两个栈比较，实则比较数组
//不能直接比较，将数组转化成字符串：toString();
//注意字符串获取字符方法为：S.charAt()
var backspaceCompare = function(S, T) {
    var stack_s=[];
    var stack_t=[];
    for(let i=0;i<S.length;i++)
    {
        if(S.charAt(i)!=='#')
            stack_s.push(S.charAt(i));
        else
            stack_s.pop();
    }
    for(let j=0;j<T.length;j++)
    {
        if(T.charAt(j)!=='#')
            stack_t.push(T.charAt(j));
        else
            stack_t.pop();
    }
    return (stack_s.toString()===stack_t.toString());
};