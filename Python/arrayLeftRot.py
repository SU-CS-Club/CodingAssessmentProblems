# A left rotation operation on an array shifts each of the array's elements 1 unit to the left.

def rotLeft(a, d):
    for x in range(0, len(a)):
        if x == d:
            return a
        target = a.pop(0)
        a.append(target)
