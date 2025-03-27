N = int(input())

for d in range(2, N + 1):
    if N % d == 0:
        print(d)
        break