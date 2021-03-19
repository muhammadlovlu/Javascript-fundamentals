// variable - var / let/ const
let money = 20;
money = 12;
const  name = 'Ronald';



const person = {
    name:'Ronny',
    age: 55,
    city: 'Dhaka'
}

const statement =`This person${name} with age ${person.age}`;


// condition
if(money>20 && age>= 45){

}
else {

}

// array 
const numbers = [34,23,14];
const friends = ['Mack', 'Carlin', 'David'];
const products = [{name: 'laptop', price:500},{name:'PC', price: 100}, {name:mobile, price:80}];

// loop : for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
}

// function : Regular and Arrow
function add (num1, num2){
    return num1 + num2;
}


const result = add(45,65);

// Arrow Function
const fiveTimes =num => num*5;
const add2 = (num1, num2) => num1 + num2;
const doMath = (x,y) => {
    const sum = x+y;
    return sum ;
}
///Extra
// “ Add dynamic value in string in javascript”
const poem = "The Wide Ocean";
const author = "Pablo Neruda";
const favePoem = `My favorite poem is ${poem} by ${author}.`;