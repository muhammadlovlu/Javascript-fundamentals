const numbers = [2,4,6,8,9];
const  friends = ['Dan', 'Raymond', 'Nick'];
const products =  [
    {id :01, name: 'laptop', price:500},
    {id:02, name:'Phone', price:100},
    {id:03, name:'watch', price: 20},
    {id:04, name:'Tablet', price: 80}
];

// map finding all names in products catagory
const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product =>product.price);
console.log(prices);
const allId = products.map(product=> product.id);
console.log(allId);

