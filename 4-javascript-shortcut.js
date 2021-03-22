const money = 250;
const isActive = true;
let food;
if(money>350){
    food = "Pizza";
}
else {
    food = "Berger";
}
console.log(food);



// if/else in a short way (this is called ternery)
let foodTwo = money>340 ? "Biriyani" : "Daal Vhat";
console.log(foodTwo);


let login = isActive ? "active" :"inactive";
console.log(login); 


// string to number
const x = +'50';
console.log(x); 


// number to string 
const y = 100 + '';
console.log(y);


// Default parameter
function add (num1,num2 = 5){
    return num1 + num2;
}

console.log(add(4,8)); // output : 12
console.log(add(4));  // output : 9  (default parameter works)