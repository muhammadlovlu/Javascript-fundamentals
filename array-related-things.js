const numbers = [2, 4, 6, 8, 9];
const friends = ['Dan', 'Raymond', 'Nick'];
const products = [
    { id: 01, name: 'laptop', price: 500 },
    { id: 02, name: 'Phone', price: 100 },
    { id: 03, name: 'watch', price: 20 },
    { id: 04, name: 'Tablet', price: 80 }
];

// map finding all names in products catagory
const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product => product.price);
console.log(prices);
const allId = products.map(product => product.id);
console.log(allId);


const vegetables = [
    { id: 455545, name: 'Begun', price: 60 },
    { id: 452112, name: 'Alu', price: 50 },
    { id: 754454, name: 'korola', price: 40 },
    { id: 215569, name: 'Dherosh', price: 30 },
    { id: 258584, name: 'Tit Korola', price: 20 },
    { id: 258820, name: 'Misti Alu', price: 20 },
    { id: 253337, name: 'Borboti', price: 20 }
];

const vegetablesDetails = vegetables.map(vegetables => {
    return vegetables.price;
});
console.log(vegetablesDetails);

const cheapVagetables = vegetables.filter(product => product.price <= 30);
console.log(cheapVagetables)


/* output:

     [
        { id: 215569, name: 'Dherosh', price: 30 },
        { id: 258584, name: 'Tit Korola', price: 20 },
        { id: 258820, name: 'Tit Korola', price: 20 },
        { id: 253337, name: 'Tit Korola', price: 20 }
    ]

*/

// remove Item using filter 
const remainingvagetables = vegetables.filter(vegetables => vegetables.price != 20);
console.log(remainingvagetables);

// Output
/*

[
    { id: 455545, name: 'Begun', price: 60 },
    { id: 452112, name: 'Alu', price: 50 },
    { id: 754454, name: 'korola', price: 40 },
    { id: 215569, name: 'Dherosh', price: 30 }
  ]

   */

  const findingProduct = vegetables.find(product => product.id === 253337);
  console.log(findingProduct);
  const findingBegunObject = vegetables.find(vegetable => vegetable.name == 'begun'|| 'Begun' );
  console.log('Finding Begun :',findingBegunObject);