// callback function
//async - once this task/function is completed then only call bcak function will be called.

//basic simple callback:
function greet (name,callback){
    //console.log('hello '+name);
    callback(name);

}

//callback function
function welcome (name){
    //console.log('welcome '+name);
    
}

greet('mani',welcome);

// callback with async:

function greet1 (name,callback){
    //async function/task - takes some time
    setTimeout(function(){
        console.log('hello '+name);
        callback(name);

    },5000); // delays 1000 ms/1 sec

}

//callback function
function welcome1 (name){
    console.log('welcome '+name);
    
}

greet1('mani',welcome1);