// implement an algorithm to determine if a string has all unique characters without using additional datastructures
// hopefully you see right away that if we had access to additional data structures this would be a great time to use a set
// my first thoughts were that there are integer representations of chars so if we can take string and break it up to its individual chars then we can compare them
// the same way assembly code compares two values by minusing one from another

const isUnique = (myString)=>{
    // the string is just a collection of characters, javascript allows us to get a numerical ascii value for each character
    // so we'lll loop through each value and check it against the other values
    // this isn't incredibly efficient with an O(n^2) efficiency
    // could sort O(nLogn) then n loop and check the current value 
    for(let i = 0; i < myString.length; i++){
        for(let k = i+1; k < myString.length; k++){
            if(myString.charCodeAt(i) === myString.charCodeAt(k)){
                return false;
            }
        }
    }
    return true;
}


console.log(isUnique('abcd'))
console.log(isUnique('abcdeef'))
console.log(isUnique('abdeff'))

// another way to do this is checking if myString[i] === myString[j]
// given the opportunity to use numbers over string comparison, I chose numbers but both are valid