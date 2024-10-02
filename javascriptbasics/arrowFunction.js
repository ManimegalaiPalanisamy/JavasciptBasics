// arrow function is unonymous function without function keyword
// no return statement required

//single parameter
const square = (num)=>num*num;

console.log(square(4));

//no parameter
const msg = ()=>'no parameter'

console.log(msg());


//2 parameters
const sum = (a,b)=>a+b

console.log(sum(10,12));

//with object
const person = {
    Fname: 'manimegalai',
    Lname: 'palanisamy'
}

const getFullName = (person)=> `${person.Fname} ${person.Lname}`

//console.log(getFullName(person));

// function with default vales to the parameters. When no values passed, it takes teh default values. else, it uses the passed values.
const getUsername = (userName = 'guest',age = 0)=> `${userName} ${age}`

console.log(getUsername());
console.log(getUsername('Mani',30));






