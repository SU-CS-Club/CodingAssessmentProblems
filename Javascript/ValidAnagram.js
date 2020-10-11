// https://leetcode.com/problems/valid-anagram/

/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
 */


 const isAnagram = (first, second)=>{
     // ok my first thought is that is just to sum up the values of the chars
     // this doesn't work because 'ac' == 'bb' - check the unicode values for these chars to confirm
     // so I guess I could loop through and remove the matching value from second and see if the second one is empty
    let firstCount = 0, secondCount = 0;

    if(first.length != second.length){
        return false;
    }
    
   for(let ind = 0; ind < first.length; ind++){
        firstCount += first.charCodeAt(ind);
        secondCount += second.charCodeAt(ind)
    }
    return firstCount === secondCount;
 }

 console.log("this should be false but it returns true")
 console.log(isAnagram('ac', 'bb'));

 const isAnagramTakeTwo = (first, second)=>{ // using string replace, if the second string is empty then we know it's a valid anagram
     if(first.length != second.length){
         return false; // they're not anagrams if they don't contain the same number characters
     }
     for(let ind = 0; ind < first.length; ind++){
         second = second.replace(first[ind], ""); // replace creates a new string which we store back into second
         if(second.length+(ind+1) != first.length){
             return false; // instead of looping through the whole thing we can check at the first occurrence that a value is passed into replace and does not exist in the second string, this will save some run times in scenarios like first = 'caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' and second = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
         }

     }
     return true;
 }
 console.log(isAnagramTakeTwo('ac', 'bb'));
 console.log(isAnagramTakeTwo('abc', 'cba'));
 console.log(isAnagramTakeTwo('aabbcc', 'cababc'));
 console.log(isAnagramTakeTwo("anagram", "nagaram"));
