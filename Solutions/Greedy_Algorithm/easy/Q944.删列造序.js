/**
 * @param {string[]} A
 * @return {number}
 */
//思路：这道题的意思就是把一个二维数组看成一个矩阵，然后判断每一列的元素是否按照字母表（ASCII）非降序
//只需计算多少列不符合要求就是要删除多少列
var minDeletionSize = function(A) {
    var sum=0;                             //记录多少不符合要求的列
    for(var i=0;i<A[0].length;i++)          //列数
    {
        for(var j=0;j<A.length-1;j++)       //行数
        {
            if(A[j].charAt(i)>A[j+1].charAt(i))
               {
                sum++;
                break;
               }
            
        }
    }
    return sum;
};