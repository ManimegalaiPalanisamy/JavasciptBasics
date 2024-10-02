// to find unique value from array.

let arr = [1,3,4,1,3];
let arrset = [...new Set(arr)];
console.log(arrset);

// convert integer to string.

let str = 32+'';
console.log(str);
console.log(str+10);
//or
let str1 = String(123)
console.log(str1+11);

// convert float to int
let num = parseInt(7.71);
console.log(num);

// check if a variable is number

let num1 = 23;
console.log(typeof(num1));
//or
console.log(isNaN(num1));
console.log(!isNaN(num1));

// swap values of 2 variables.

let a=5,b=10;
[a,b] = [b,a]
console.log(a,b);

// check if an object has a specific property

const person = {
    name:'mani',
    age:20
}

if(person.hasOwnProperty('city')){
    console.log('person has name property');
}else{
    console.log('person doesnt have the property');    
}

// remove falsy values from the array. (falsy values - false,0,"",null,undefines,NaN)

const values = [0,1,"",false,null,a,3];
console.log(values.filter(Boolean));

// covert string to uppercase/lowercase

const str2 = 'maniMegalai';
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// check if an array contains a specific value.

const lanarray = ['java','javascript','ruby'];
const emparray = [];
console.log(lanarray.includes('java'));

// check if an array is empty or not

console.log(lanarray.length!=0);
console.log(emparray.length==0);


// convert string to number

console.log(parseFloat('123.56'));
console.log(parseFloat('123.1'));
console.log(parseInt('345.2'));
console.log(parseInt('345'));

// join array elements into string

const words = ['h','i','m'];
console.log(words.join(' '));
console.log(words.join('hello').toUpperCase());

// access object property dynamically

const user = {
    name:'tom',
    age:40,
    dob:'01-01-1990',
    city:'calgary'
};

console.log(user.name);
console.log(user['dob']);

// clone an array or object - using spread operator

const srcarr = [20,13,24];
const tararr = [... srcarr];
console.log(tararr);

console.log({... user});


// convert an object to array

//a. keys array
const keyarray = Object.keys(user);
console.log(keyarray);
//b. values array
const valuearray = Object.values(user);
console.log(valuearray);
//c. key-values array
const keyvaluearray = Object.entries(user);
console.log(keyvaluearray);

// convert an object to map

const keyvaluemap = new Map(Object.entries(user));
console.log(keyvaluemap);

// get current date and time

const currentdate = new Date();
console.log(currentdate.toLocaleDateString());

// check if a variable is defined or not

let i;
console.log(typeof i);

// truncate an array

const numarray = [1,8,9,2,3,4,5];
numarray.length=4;
console.log(numarray);

// find last element in an array

const numarray1 = [1,8,9,2,3,4,5];
console.log(numarray1.slice(-1));












