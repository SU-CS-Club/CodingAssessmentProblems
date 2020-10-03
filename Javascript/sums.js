
// given an array of integers nums and an integer target, return the indeces of the two numbers that add up to the target
// you may assume that each input would ahve exactly one solution and may not use the same element twice
// the answer can be returned in any order
const twoSums = (nums, target) =>{
    // error check first
    if(nums.length < 2){
        throw "Nums array must have 3 elements";
    }
    let forReturn;
    nums.forEach((val, ind)=>{
        for(let k = ind + 1; k < nums.length; k++){
            if((val + nums[k]) === target){
                forReturn = new Array(ind, k)
            }
        }
    })
    return forReturn;
}
/**
 * given an array of integers nums and an integer target, return the indeces of the two numbers that add up to the target
 * you may assume that each input would ahve exactly one solution and may not use the same element twice
 * the answer can be returned in any order
 * @param {int[]} nums 
 * @param {int} target 
 */
const twoSumsWithHash = (nums, target)=>{
    let hashNums = {}; // instantiate hash then generate key/value pairs (O(n))
    nums.forEach((val, ind)=>{ // this is a speed/memory trade off - because we're taking advantage of hashing access which is O(1) we get faster lookup at the 
    // expense of having additional memory needed to solve the problem
        hashNums[val] = ind
    })
    // now for the loop to check out values
    for(let i = 0; i < nums.length; i++){ 
        let diff = target - nums[i] // difference is the target minus the current value - since we filled our hish which the values as the key, now we can search for the remaining amount
        // so lets check whether we have a value that matches the remaining "difference" and that the difference isn't the current value we're evaluating
        if(hashNums.hasOwnProperty(diff) && hashNums[diff] !== i){
            return [i, hashNums[diff]]
        }
    }
}
//given an array of n integers nums and a target, find the number of index triplets (i, j, k) with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target
// example input nums = [-2, 0, 1, 3], target = 2
// output should be 2
// there are two triplets that are less than 2; [-2, 0, 1] and [-2, 0, 3]
const threeSumSmaller = (nums, target)=>{
    // first, lets check for cases that can't be computed
    if(nums.length < 3) return 0 // can't find triplets with out at least three values
    nums.sort((a, b)=> a - b) // js specific sort function - results in sorting the array smallest to largest (O(n))
    let result = 0;;
    for(let i = 0; i < nums.length; i++){ // start outer loop and initial start and end variables
        let start = i + 1;
        let end = nums.length -1;
        while(start < end){ // now lets check the interior components of array
            const sum = nums[i] + nums[start] + nums[end]; // we now have the sum of three of the internal indices
            if(sum < target){ // affirmative case, increase result by the end value - start value
                result += end - start; // because we're not returning distinct combinations we use end - start instead of incrementing (and doing additional checks)
                console.log(" at index: " + i + " the result is: " + result + " which was made by end: " + end + " minus the start: " + start) 
            }
            if(sum < target){
                // if affirmative then increase start value to check next index of start
                start+=1;
                
            } else { // or decrement end value
                end-=1;
            }
        }

    }
    return result;
}





console.log(twoSums([2, 7, 11, 15], 9))
console.log(twoSumsWithHash([2, 7, 11, 15], 9))
console.log(threeSumSmaller([-2, 0, 1, 3], 2))
console.log(threeSumSmaller([2, 0, 0, 2, -2], 2))