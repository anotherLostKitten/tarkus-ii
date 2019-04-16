from math import sqrt
qs=lambda l:qs([i for i in l if i<l[0]])+[i for i in l if i==l[0]]+qs([i for i in l if i>l[0]])if len(l)>1 else l
print(qs([4,2,3,6,1,2,6,7,8,1,2,3,8,9]))
ptip=lambda mx:[(i,j,int(sqrt(i*i+j*j)))for i in range(1,mx)for j in range(1,mx)if sqrt(i*i+j*j)%1==0]
print(ptip(50))
