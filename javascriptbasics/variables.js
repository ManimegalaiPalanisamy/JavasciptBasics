// 1. var - old way
// scope - local/global
//redeclaration and reinitialization is allowed 
// if a variable is not initialized during declaration, it gets undefined. 

var x=10;
function variable(){
    var y=20;
}
console.log(x)

var pop = 'hello world';

// redeclarartion which is not giving any error.
var top;
var top;
function rel(){
    top = 'hello js';
}
rel();
console.log(top);

//if a variable is not initialized during declaration, it gets undefined. 
var p;
console.log(p); //gives undefined.

//issue with var - when duplicate variable is initialized, the value of the earlier variable gets overwritten.

var a=10;
if(true){
    var a=20;
}

console.log(a);



//2. Let
//scope: block scope - {}
//does allow duplicate variable but it works within the block
//redeclaration is not allowed 
//reinitialization is allowed 

let z=10;
if(true){
    let z=20;
}

console.log(z);

let d=20;
//let d=10; - redeclaration is not allowed


//3. const

// allows to declare constant variable / fixed values.
//reinitialization is not possible
// must be initialized during declaration

const days = 7;
//const month; - must be initialized during declaration ekse gives error.
// days = 8; - throws error as Assignment to constant variable.


