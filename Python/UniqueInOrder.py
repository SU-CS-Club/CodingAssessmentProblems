'''
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each 
other and preserving the original order of elements.

Examples:
unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
unique_in_order([1,2,2,3,3])       == [1,2,3]

'''


def unique_in_order(iterable):
    # Stores our uniques to be returned as the final result
    uniques = []
    # Loop through iterable
    for x in iterable:
        if x in uniques:
            if x != pastUnique:
                uniques.append(x)
                pastUnique = x
        else:
            uniques.append(x)
            pastUnique = x
    return uniques

# Another implementation that is better
# def unique_in_order(iterable):
#     result = []
#     prev = None
#     for char in iterable[0:]:
#         if char != prev:
#             result.append(char)
#             prev = char
#     return result


if __name__ == "__main__":
    print(unique_in_order('AAAABBBCCDAABBB'))
    print(unique_in_order('ABBCcAD'))
    print(unique_in_order([1, 2, 2, 3, 3]))
