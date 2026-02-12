 const mynum = [1,2,3,4,5,6,7,8,9,10]

 const newnum=mynum.map((a)=>a+10)

 // now chaning

 const newwnum = mynum
 .map((a)=>a*10)
 .map((a)=>a+1)
 .filter((a)=>a>=40)
                    

  
 console.log(newnum);
 