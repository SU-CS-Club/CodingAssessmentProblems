'''
Write a function, persistence, that takes in a positive 
parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits 
in num until you reach a single digit.

Example:
persistence(39) => 3  # Because 3*9 = 27, 2*7 = 14, 1*4=4
                       # and 4 has only one digit.

persistence(999) => 4 # Because 9*9*9 = 729, 7*2*9 = 126,
                       # 1*2*6 = 12, and finally 1*2 = 2.

persistence(4) => 0   # Because 4 is already a one-digit number.

'''

# Apdapted from https://www.codewars.com/kata/reviews/55c7dba2ea4fa879c4000015/groups/57f2bc8e69e09cb01c0000c4


def persistence(n):
    n = str(n)
    count = 0
    while len(n) > 1:
        sum = 1
        for x in n:
            sum *= int(x)
        n = str(sum)
        count += 1
    return count


if __name__ == "__main__":
    print(persistence(39))
    print(persistence(999))
    print(persistence(4))
