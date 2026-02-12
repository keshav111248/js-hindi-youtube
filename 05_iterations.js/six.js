// const coding = ["js", "ruby", "java", "python", "cpp"]
// filter  ************  it is passed if only when conditions will passed



const mynums = [1,2,3,4,5,6,7,8,9,10]
const newnums = mynums.filter((num)=>num>4)
console.log(newnums);

const nums = []

mynums.forEach((num)=>{
    if (num > 4) {
        nums.push(num)
    }
})
console.log(nums);


const books = [
    { title: 'book one', genre: 'fiction', publish: 1981,
    edition: 2004},
    { title: 'book two', genre: 'non-fiction', publish: 1981,
    edition: 2004},
    { title: 'book three', genre: 'history', publish: 1981,
    edition: 2004},
    { title: 'book four', genre: 'non-fiction', publish: 1981,
    edition: 2004},
    { title: 'book five', genre: 'science', publish: 1981,
    edition: 2004},
    { title: 'book six', genre: 'fiction', publish: 1981,
    edition: 2004},
    { title: 'book seven', genre: 'history', publish: 1981,
    edition: 2004},
    { title: 'book eight', genre: 'science', publish: 1981,
    edition: 2004},
    { title: 'book nine', genre: 'non-fiction', publish: 1981,
    edition: 2004},
];

let userbooks = books.filter((books)=>books.genre === 'non-fiction')
userbooks = books.filter((books)=>{return books.publish >= 1980 && books.genre === "history"})
console.log(userbooks);
 