// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
        
    }
    console.log(element);
     
    
}

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value: ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
        
        
//     }
    
    
// }


let arr = ["keshav", "batman", "hone"]
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
    
}


// break and continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`detedted 5`);
        break
        
    }
    console.log(`value of i ${i}`);
    
    
}
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`detedted 5`);
        continue
        
    }
    console.log(`value of i ${i}`);
    
    
}



