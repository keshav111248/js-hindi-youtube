// sigleton



// object literals

const mysym = Symbol("key1")


const jsuser = {
    name: "keshav",
    "full name": "keshav yogi",
    [mysym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "keshav@gmail.com",
    isloggedIn: false,
    lastlogindays: ["monday","sat"]
}
console.log(jsuser.email)
console.log(jsuser.age)
console.log(jsuser["full name"])
console.log(jsuser[mysym])


jsuser.email = "keshav1234@"
//Object.freeze(jsuser) this is for freeze after this nothing will change

jsuser.greeting = function(){
    console.log("hello keshav");
    

}

console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`hello keshav, ${this.name}`);
    
}
console.log(jsuser.greetingtwo());



// singleton

const regularuser = {
    email: "keshav@",
    fullname: {
        userfullname: {
            firstname: "keshav",
            lastname: "yogi"

        }
    }
}

console.log(regularuser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//

// nst obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);


const course = {
    coursename: "jshindi",
    price: "999",
    courseInstructor: "keshav"
}

course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);



//API

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }

{
    "name": "keshav",
    "coursename": "js hindi",
    "price": "free"
}

// arrays api

[
    {},
    {},
    {}
]