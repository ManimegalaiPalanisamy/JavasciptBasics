// inheritance
// when a child class and parent class has same methods, it prioritizes the child class method.
// super keyword is used to access the su[er class constructor]


class Car {
    constructor(name,price,color){

        this.name = name;
        this.price = price;
        this.color = color;
        let Make = 2019;
        console.log(this.name+' Super class constructor');
    }

    starting(){
        console.log(this.name+' is starting from super class');
    }
}

class carChild extends Car{
    constructor(name,price,color){
        super(name,price,color); // super keyword - calls the parent class constructor
        console.log(this.name+' child class constructor');
        console.log(super.Make+' from child class constructor');
    }

    repairing(){
        console.log(this.name+' is repairing');
    }

    // starting(){
    //     console.log(this.name+' is starting from child class');
    // }


}

const car1 = new carChild ('Audi',340000,'red');
const car2 = new Car("honda",200000,'silver')

car1.starting();
car1.repairing();
console.log(car2.name+' '+car2.color);