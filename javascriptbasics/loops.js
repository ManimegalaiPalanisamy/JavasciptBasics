// 1. simple for loop

let arr = [1,2,3,4,5,6]

for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);  
}


//2. for....of loop - for array

for (const j of arr) {
    //console.log(j);
}

//3. foreach loop

arr.forEach(element => {
    //console.log(element);
});


//4. for....in - specifically for object

let user = {
    name2 : 'user1',
    age:12,
    city:'Calgary',
}

for(key in user){
    console.log(key +' '+ user[key]);
}


// while loop

let i=0;
while(i<=10){
    //console.log(i);
    i++;
}


//do while loop
let j=0;
do {
    //console.log(j);
    j=j+2;
} while (j<=10);


//break - to break the loop with the loops.





