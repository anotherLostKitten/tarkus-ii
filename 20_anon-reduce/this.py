# team discount mohammed uddin -- theooder peters & sajed naiham
# sd2pd8
# k20 -- ree ductio noises
# 2019-04-29
with open("that.txt")as f:
    ws=[i.strip().lower()for i in f.read().split(" ")if i]
    s=lambda w:len([i for i in ws if i==w])
    g=lambda w:len([i for i in range(len(ws))if all(ws[i+j]==w.split(" ")[j]for j in range(len(w.split(" "))))])
    def m():
        wf={}
        for i in ws:
            if i in wf:
                wf[i]+=1
            else:
                wf[i]=1
        return max(wf,key=wf.get)
    print(m())
    print(s("the"))
    print(g("and the"))
