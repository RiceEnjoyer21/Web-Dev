a = int(input())
n = int(input())
sum = 1
for i in range(1, n + 1):
    sum += pow(a, i)
print(sum)
