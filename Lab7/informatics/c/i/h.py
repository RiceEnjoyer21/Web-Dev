b=int(input())
st=""
for i in range(1,b+1):
    if b%i==0:
        st+=str(i)+" "
print(st)