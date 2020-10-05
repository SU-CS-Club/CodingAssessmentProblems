# A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
# Function call
# a = array
# d = rotations
def rotLeft(a, d):
    # for x in the range of 0 to the length of the array
    for x in range(0, len(a)):
        # if the current location is the number of rotations 
        if x == d:
            # return the array
            return a
        # else remove the first element and save
        target = a.pop(0)
        # add the target to the end of the array
        a.append(target)
