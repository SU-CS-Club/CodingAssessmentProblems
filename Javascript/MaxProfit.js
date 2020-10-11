// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * 
 * Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min_val = prices[0]; // initialize min_val and max_profit - min_val could be set to Number.MAX_VALUE
    let max_profit = 0; // assuming positive values - could be set to Number.MIN_VALUE for all cases
    
    
    for(let i = 0; i < prices.length; i++){ // loop through array of prices
       if(prices[i] < min_val){ // if the curr price < the current min_val then set min_val to current price
           min_val = prices[i];
       } 
        else if((prices[i] - min_val) > max_profit){ // if current - min_val is greater than max profit, winner winner chicken dinner - set max profit to the current difference
           max_profit = prices[i] - min_val;
       }
        
    }
    return max_profit;
};


console.log(maxProfit([7, 1, 5, 4, 6, 4]))
