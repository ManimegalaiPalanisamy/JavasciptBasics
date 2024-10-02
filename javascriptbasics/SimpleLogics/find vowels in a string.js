//find vowels in a string

let str = 'manimegalai';
let arrstr = [];
let vowels = ['a','e','i','o','u']

for(const char of str){
    if(vowels.includes(char) && !arrstr.includes(char)){
        arrstr.push(char);
    }
}

console.log(arrstr.toString().replaceAll(',',''));