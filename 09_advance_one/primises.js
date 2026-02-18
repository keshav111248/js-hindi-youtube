// Promise One
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('keshav');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("promise consumed");
});


// Promise Three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});


// Promise Four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;

        if(!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('Error: something went wrong');
        }

    }, 1000);
});


promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))





const promisefive = new promiseFour(function(resolve, reject){
     setTimeout(function(){
        let error = true;

        if(!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('Error: js went wrong');
        }

    }, 1000);

})

async function consumePromisefive(){
    try {
        const response = await promisefive
    console.log(response);
    

    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromisefive()