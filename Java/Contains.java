package Java;

import java.util.HashSet;

public class Contains {

    public static void main(String[] args){

    }

    // Contains Duplicate
    // Given an array of integers, find if the array contains any duplicates.
    // Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct
    // Example input [1, 2, 3, 1] output: true
    // Example input [1, 2, 3, 4] output: false

    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<Integer>(); // This is a space time trade off, by creating a has set we can quickly add (O(1)) and check if a value is contained in the set
        // for clarification a set only has disctinct values, there cannot be duplicates. We're relying on that fact to resolve this problem
        for(int i: nums){ // for each loop
            if(set.contains(i)){ // if the set already has the value then this is a duplicate and we can return true
                return true;
            } else {
                set.add(i); // if the set does not contain the value, add the value to the set
            } 
        } // if we iterate through all the values in the for loop and there were no duplicates, then the base case is returned which is false
        return false;
    }
}