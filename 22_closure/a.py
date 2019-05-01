repeat=lambda w:lambda n:w*n
def make_counter():
    x=1
    def inc():
        nonlocal x
        x+=1
        return x
    def val():
        nonlocal x
        return x
    return (inc,val)
print("repeating tests")
r1=repeat("hello")
r2=repeat("goodbye")
print(r1(2))
print(r2(2))
print(repeat("cool")(3))
print("testing accessing & incrementing one counter")
ctr1,val1=make_counter()
print(val1())
print(ctr1())
print(ctr1())
print(val1())
print("adding second counter")
ctr2,val2=make_counter()
print(val2())
print(ctr2())
print("first counter again")
print(val1())
print(ctr1())
print(ctr1())
print(val1())
print("and now second one again mohammed uddin noise")
print(ctr2())
