from string import ascii_lowercase, ascii_uppercase, digits
def pmin(pw):
    return all(any(j in i for j in pw)for i in[ascii_lowercase,ascii_uppercase,digits])
def pstrength(pw):
    return len([0 for i in[ascii_lowercase,ascii_uppercase,digits,".?!"," ","&","#",",:;","-_","*$"]if any(j in i for j in pw)])
print(pmin("hell0"))
print(pmin("hEll0"))
print(pmin("hellO"))

print(pstrength("he%$#^%&*%&#@L-*.Ll;,?l0"))
print(pstrength("hElL0"))
print(pstrength("asdfghjklqwertyuiopmnbvcxz"))
