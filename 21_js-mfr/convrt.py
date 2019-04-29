import csv  
import json  
f=open('data.csv','rU')    
reader=csv.DictReader(f,fieldnames=("DBN","Name","schoolyear","fl_percent","frl_percent","total_enrollment","prek","k","grade1","grade2","grade3","grade4","grade5","grade6","grade7","grade8","grade9","grade10","grade11","grade12","ell_num","ell_percent","sped_num","sped_percent","ctt_num","selfcontained_num","asian_num","asian_per","black_num","black_per","hispanic_num","hispanic_per","white_num","white_per","male_num","male_per","female_num","female_per"))    
out=json.dumps([row for row in reader])
f=open('data.json','w')
f.write(out)
