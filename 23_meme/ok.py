def e():
    l=[0,1]
    xpl=lambda n:[l.append(l[-1]+l[-2])for i in range(len(l),n+1)]
    return lambda n:[xpl(n),l[n]][1]
f=e()
print(f(7))
print(f(4))
print(f(40))
