// Array destructuring 
const numbers = [12,24,34,36,84,77];
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
const d = numbers[3];
const e = numbers[4];
const f = numbers[5];
console.log(a,b,c,d,e,f); // output : 12 24 34 36 84 77


const [g,h,i,j,k,l] =[120,140,160,170,220,250];
const numberTwo = [g,h,i,j,k,l];
console.log(numberTwo);  // output : [ 120, 140, 160, 170, 220, 250 ]



function runners(){
    return ["Dan", "Crouge", "Anna", "Tezy"];
}

const [x1,x2,x3,x4] = runners();
const allRunners = [x1,x2,x3,x4];
console.log(allRunners); // output:  [ 'Dan', 'Crouge', 'Anna', 'Tezy' ]



// Default Value
const [a1 =20, a2=60] = [];
const defaultValue = [a1,a2];
console.log(defaultValue);  // output :  [ 20, 60 ]


// Ignoring Some Values
const [b1, ,b2,b3] = ['Tammy','Zammy','Nancy', 'Cassy'];
const ignoreArrayValue = [b1,,b2,b3];
console.log(...ignoreArrayValue); // output : Tammy undefined Nancy Cassy 



//The Rest Parameter And Spread Syntax
var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, , third, ...others] = planets;

console.log(first);  //Output: Mercury
console.log(third);  //Output: Venus
console.log(others); //Output: ["Mars", "Pluto", "Saturn"]


//Multiple Array Destructuring
var places = ["Chittagong", "Dhaka", "Sylhet", "Rajshahi"];
var [c1, c2, , c4] = [single, ...rest] = places;

console.log(c1); //Output: Chittagong
console.log(c4); //Output: Rajshahi
console.log(single); //Output: Chittagong
console.log(rest); //Output: [ "Dhaka", "Sylhet", "Rajshahi"]


//object destructuring
const person = {
    name:"lisa",
    age:"23",
    city:"New York",
    profession:"Programmer"
}

let name = person.name;
let age = person.age;
let city = person.city;
let profession = person.profession;

console.log(name);            //lisa
console.log(age);            //23
console.log(city);          //New York
console.log(profession);   // Programmer


// Basic Object Destructuring
const developer ={
    firstName:'Danny',
    realAge:'45',
    newCity: 'texas'
}
let {firstName, realAge, newCity} = developer;
console.log("First Name:",firstName,"Real Age:",realAge,"New City:",newCity) // output :    First Name: Danny Real Age: 45 New City: texas




//Using a new Variable Name
let personOne = {newName: "Nick", newcountry: "Ireland", newjob:"Assistant Manager"};

let {newName: foo, newjob: bar} = personOne;

console.log(foo);//"Nick"
console.log(bar);//"Assistant Manager"

// explaining three dots (spread operator)
function sum(x,y,z){
return x+y+z;
}
const newNumbers = [4,8,12];
console.log(sum(...newNumbers));