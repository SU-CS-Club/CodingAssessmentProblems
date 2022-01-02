# I used this video to help me finish the code
# https://www.youtube.com/watch?v=4BS8b86ACJo

=begin
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
=end



# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    dict = {}
    nums.each_with_index do |n,i|
        return [dict[n], i] if dict.key?(n)
        diff = target - n
        dict[diff] = i
    end
end