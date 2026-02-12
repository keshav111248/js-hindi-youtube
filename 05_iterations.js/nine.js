const mynum = [1,2,3]
const mytotal = mynum.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval ${currval}`);
    
    return acc + currval
}, 0)

const mytotall = mynum.reduce((acc, curr)=>acc+curr,0)




console.log(mytotal);



const shoppingcart = [
    {
        itemname: "js",
        price: 200
    },
    {
        itemname: "py",
        price: 300
    },
    {
        itemname: "dev",
        price: 400
    },
    {
        itemname: "sx",
        price: 500
    },
]


const pricetopay = shoppingcart.reduce((acc, item)=>acc+item.price, 0)
console.log(pricetopay);


