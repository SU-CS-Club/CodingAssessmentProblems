// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// The sum of two bits can be calculated using XOR and AND to find the carry
// 1+2 (base 10) -> 01+10 (base 2)
// 01 & 10 (base 2)   no common set of bits (AND)
// 01 ^ 10 (base 2)   sum of the bits -> 11 (XOR)
// a = 11 (base 2) = 3 (base 10)


class Solution {
    // Function call
    // a = some int
    // b = some int
    public int getSum(int a, int b) {
        // while there is no carry
        while (b !=0){
            // carry has common set of bits
            int carry = a&b;
            // sum of the bits
            a = a^b;
            //carry is shifted to left giving the sum
            b = carry << 1;
        }
    return a;
    }
}