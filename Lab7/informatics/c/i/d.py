import math

n, k = map(int, input())
if 0 <= k <= n <= 10:
    C = math.factorial(n) // (math.factorial(k) * math.factorial(n - k))
    print(C)
