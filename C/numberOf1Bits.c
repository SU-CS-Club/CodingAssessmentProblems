// This isnt the most efficient since it has to loop through all 32 bits
// Function call
// uint32_t n = some unsigned integer
int hammingWeight(uint32_t n)
{
    // this unsigned int is used to keep track of 1s
    unsigned int c;
    // loop through the 32-bit word until no more bits are set
    for (c = 0; n; n >>= 1)
    {
        // increments c using the AND operator
        c += n & 1;
    }
    // returns the number of 1s
    return c;
}