function checkAge(age){
    let result;
    if(age>=18 && age<=50){
        result = 'major';
    }else if(age<18 && age>0){
        result = 'minor';
    }else if(age>50){
        result = 'senior citizen';
    }
    return result;

}

console.log(checkAge(100));