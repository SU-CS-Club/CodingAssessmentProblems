
// given an array of integers nums and an integer target, return the indeces of the two numbers that add up to the target
// you may assume that each input would ahve exactly one solution and may not use the same element twice
// the answer can be returned in any order
const twoSums = (nums, target) =>{
    // error check first
    if(nums.length < 2){
        throw "Nums array must have 3 elements"
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

console.log(twoSums([2, 7, 11, 15], 9))
console.log(twoSumsWithHash([2, 7, 11, 15], 9))