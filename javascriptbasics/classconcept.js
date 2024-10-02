// classes and Objects

class Car {
    constructor(name,price,color){

        this.name = name;
        this.price = price;
        this.color = color;
    }

    starting(){
        console.log(this.name+' is starting');
    }
}

const car1 = new Car ('Audi',340000,'red');
const car2 = new Car("honda",200000,'silver')

car1.starting();
console.log(car2.name+' '+car2.color);