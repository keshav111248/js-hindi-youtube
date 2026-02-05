const name = "keshav-y"
const repocount = 50

let age = 17

// console.log(name + repocount + "value" + age) // dont use now days

console.log(`hello my name is ${name} and my repocount is ${repocount} 
    and my age is ${age} `);

const gamename = new String("keshav")

console.log(gamename[4]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf("v"));

 const newString = gamename.substring(0, 4)
 console.log(newString);

const anotherString = gamename.slice(-8, 4)
console.log(anotherString);

const newstringone = "  hitesh   "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://keshav.com/keshav%20yogi"

console.log(url.replace("%20", "_"))

console.log(url.includes("sundar"));
console.log(url.includes("yogi"));

console.log(gamename.split("-"));









