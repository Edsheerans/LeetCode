/**
 * @param {number[]} prices
 * @return {number}
 */
//思路:只要后面一个大于前面一个的值，就卖出相减获得利润，将利润加和
var maxProfit = function(prices) {
    var total=0;
    for(var i=0;i<prices.length;i++)
    {
        temp=prices[i+1]-prices[i];
        if(prices[i]<prices[i+1])
            total+=temp;
    }
    return total;
};

//另外一种写法
var maxProfit = function(prices) {
    let total = 0;
    let last = -1;
    for (let price of prices) {
        if(last !== -1 && price > last) {
            total += price - last;
        }
        
        last = price;
    }
    
    return total;
};