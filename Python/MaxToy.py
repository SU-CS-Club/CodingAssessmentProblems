# Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy?
# Function call
# prices = array
# k = Total cash
def maximumToys(prices, k):
    # This count will be used for how many toys are purchased
    count = 0
    # Sets cost equalt to the corted array of prices
    # sorted is a built in python function used to sort from lowest to greatest
    cost = sorted(prices)
    # for x in the range 0 to the lenght of the array prices
    for x in range(0, len(prices)):
        # if the cost at the current index is less then or equal to the current allowance
        if cost[x] <= k:
            # subtract the cost of the toy from allowance
            k -= cost[x]
            # increase toy count
            count += 1
    # return toy count
    return count
