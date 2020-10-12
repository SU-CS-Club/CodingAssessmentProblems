// https://leetcode.com/problems/valid-parentheses/

/**
 * 20. Valid Parentheses
Easy

5815

241

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 */

 const isValid = (str)=>{
     // so my first thoughts are to handle this in a stack similar to the way you would have prefix notations in a compiler or something similar to that
     // that idea didn't work out at all but then I realized I could make a map
     if(str.length < 2){ // if there's not at least two characters in the string then immediately return false
         return false;
     }
     const obj = { // map with the available options
         '(': ')',
         '[': ']',
         '{': '}'
     }
     const stack = []
     for(const paran of str){
         
         if(obj.hasOwnProperty(paran)){ // add to the stack when the current paran is an open paran
             stack.push(paran)
         } else { // if not an open paran
             const closeParan = stack.pop(); // pop the most recent value form the stack, should be an open paran 
             if(paran !== obj[closeParan]){ // if the current paran isn't a closing paran then evaluate as false
                 return false;
             }
         }
     }
     return true;
 }

 console.log(isValid("({)}[]"))