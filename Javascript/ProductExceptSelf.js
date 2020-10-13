// https://leetcode.com/problems/product-of-array-except-self/
/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */




 const productExceptSelf = (nums)=>{
    // alright well first thoughts are that I'm going to need to loop through values at least once,
    // because it's asking for O(n) run time, I know I can't do this with a nested loop and I can't keep a running product and use division
    // this is how to do it in O(n)
    // The restriction on using division is because every value at i the resulting array is just the product of the input array divided by i
    let runningVals = []
    for(let i = 0; i < nums.length; i++){
        runningVals.push(1)
        for(let j = 0; j < nums.length ; j++){
            if(i !== j){
                runningVals[i] *= nums[j]
            }
        }
        
    }
    return runningVals;
}
 productExceptSelf([1, 2, 3, 4])

// Another way to look at this problem to is to see that i in the resulting array is the product of everything to the left and right of i
// so now I'm going to create two separate arrays with those specific results
// this means that the value at any given i of the resulting array is left[i-1] * right[i+1]
// run time of this answer is O(3n) which is just O(n)
const productExceptSelfTakeTwo = (nums)=>{

    let left = []
    let right = []
    // create our two arrays and fill them
    for(let i = 0; i < nums.length; i++){
        right.push(1)
        if(i === 0){ // fill the first value to match the nums array since no multiplication is occuring at that point
            left[i] = nums[i]
        } else {
            left[i] = left[i-1] * nums[i]
        }
        
    }
    for(let j = nums.length -1; j >= 0; j--){
        if(j == nums.length -1){
            right[j] = nums[j];
        } else {
            right[j] = right[j+1] * nums[j]
        }
    }
    for(let k = 0; k < nums.length; k++){
        if(k ===0){
            nums[k] = right[k+1]
        } else if (k === nums.length-1){
            nums[k] = left[k-1]
        } else {
            nums[k] = right[k+1] * left[k-1]
        }
    }
    return(nums)

}
console.log(productExceptSelfTakeTwo([1, 2, 3, 4]))