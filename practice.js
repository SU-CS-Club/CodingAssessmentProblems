
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

console.log(twoSums([2, 7, 11, 15], 9))