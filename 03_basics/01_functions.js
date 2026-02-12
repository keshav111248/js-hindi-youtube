function saymyname(){
    console.log("k");
    console.log("e");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("v");
}

saymyname()

function addtwonumbers(number1, number2){
    console.log(number1 + number2);
    
}
addtwonumbers(1, 4)


function addtwonumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

let result = addtwonumber(3, 5)
console.log("result: ", result);


function multwonumber(num1, num2){
    return num1 * num2
}
let result2 = multwonumber(3, 3)
console.log("result: ", result2);



function loginuser (username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginuser("username"))   this is correct way  
console.log(loginuser())    // this is we do to cheack if we dont give username then what will happen


function calculatecartprice(...num1){
    return num1
}

console.log(calculatecartprice(200, 400, 500, 2000, 3000));

const user = {
    username: "keshav",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)