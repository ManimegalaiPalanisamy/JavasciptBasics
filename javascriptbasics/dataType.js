//variable declaration
let name1 = 'mani';
let a=123;
let val = true;

console.log(name1);

//declaring constant
const year = 2024;
//year= 3; throws error bcoz, value of const variable cannot be changes
//console.log(name1);

//1. primitive dataTypes
//--string
//--boolean
//--numeric
//--null
//--undefined

let s1 = 'mani';
let b1 = true;
let isactive = false;
let n1 = 20;
let f1 = 20.56;
let n2 = null;
let n3;
let n4 = undefined;

// typeof() function returns the data type of the variable

console.log(typeof(s1));

//Dynamic Typing: - any type can be stored to a variable

let d = 'mani';
d=40;
d=true;

// 2. Reference type datatypes
// -- Object
// -- Array
// -- function

//1. Objects: - user is an object and name1,age is the properties.
let user = {
    name1: "mani",
    age:40
}

console.log(user);

// to access the object properties, use dot notation.

console.log(user.age);
console.log(user.name1);

// to update the object properties:
user.age = 50;
console.log(user.name1+' '+user.age);

//using bracket notation:
user['name1'] = 'manimegalai';
console.log(user.name1);


//2. Arrays - list of objects , always dynamic, can add any kind of data at any time

let language = ['java','c','c++'];
console.log(language);
console.log(language[1])
language[0] = 'javascript';
console.log(language);
language.push('java');
console.log(language);
console.log(language.length);

//3.Function - no overloading/overriding concept. it calls the recent function declared. even though the param is not given in method call, it gives undefines

function fun1(){
    
    console.log("no param function")

}

fun1();

function fun2(name){
    
    console.log('1 param function '+ name)

}

fun2('mani');

function fun3(a,b){
    console.log('param function')
    return a+b;

}
console.log(fun3(10,30));



