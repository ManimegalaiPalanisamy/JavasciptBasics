function checkAge(age,gender){
    let result;
    if(age>=18 && age<=50){
        if(gender =='F'){
            result = 'major - female';
        }else if(gender =='M'){
            result = 'major - male';
        }
    }else if(age<18 && age>0){
        if(gender=='F'){
            result = 'minor - female';
        }else if(gender=='M'){
            result = 'minor - male';
        }
    }else if(age>50){
        if(gender=='F'){
            result = 'SC - female';
        }else if(gender=='M'){
            result = 'SC - male';
        }
    }
    return result;

}

console.log(checkAge(45,'M'));