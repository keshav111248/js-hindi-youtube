// let a = 100
// const b = 200
// var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
    console.log("Inner: ", b);
    // console.log("var: ", c);
    
    
    
}
// console.log(a);
// console.log(b);
console.log(c);


function one (){
    const username = "keshav"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()

if (true) {
    const username = "keshav"
    if (username === "keshav") {
        const website = " youtube"
    }
    console.log(website);
    
}
console.log(username);

// **************** interesting ********* //



function addone(num){
    return num + 1 
}
addone(5)


const addTwo = function(num){
    return num + 2
}
addTwo(5)