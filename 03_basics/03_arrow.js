const user = {
    username: "keshav",
    price: 999,
    age: 17,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


// *********arrow fn ********* //

//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }
//  console.log(addTwo(3, 4));



const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "keshav"})
    
 
 console.log(addTwo(3, 4));