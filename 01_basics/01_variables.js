const accountId = 144553
let accountEmail = "keshav@google.com"
var accountPassword = "12345"
accountCity = "jaipur"  
accountState ="rajasthan"


// accountId = 2 // not allowed

// const accountID = 123456


accountEmail = "keshav1234567890@gmail.com"
accountPassword = "21212121"
accountCity = "shimla"

console.log(accountId);

accountEmail = "keshav1234567890@gmail.com"
accountPassword = "11111"
accountCity = "paonta"

/*
prefer not use var
because of issue in block scope and functional scope

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])