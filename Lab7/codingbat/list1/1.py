def first_last_6(nums):
    return nums[0] == 6 or nums[-1] == 6

print(first_last_6([6, 1, 2, 3]))  
print(first_last_6([1, 2, 3, 6]))  
print(first_last_6([1, 2, 3, 4]))  