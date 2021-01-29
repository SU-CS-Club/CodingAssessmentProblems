'''
Make a program that filters a list of strings and returns a list 
with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has 
to be a friend of yours! Otherwise, you can be sure they're not...

Example:
Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

'''


def friend(x):
    friendslist = []
    for name in x:
        if len(name) == 4:
            friendslist.append(name)
    return friendslist

# Another Solution
# def friend(x):
#     return [f for f in x if len(f) == 4]


if __name__ == "__main__":
    print(friend(["Ryan", "Kieran", "Jason", "Yous"]))
