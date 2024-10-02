// common properties declared as static i.e no of wheels in a vehicle. - called class variables
// this static properties reduces the memory utilization. 
// unless other properties of class, static properties shares a common space across the objects.
// static gets created when the class gets loaded which gets shared among all the objects
// used to access by class name - ClassName.staticproperty
// static properties can be inherited an dcan be accessed via childclass name
class Car {
    static wheels = 4;
    constructor(name,make,price){
        this.name = name;
        this.make = make;
        this.price = price;
    }

    static stop(){
        console.log(`${this.name}  gets stopped`);
        console.log(`${Car.wheels} , gets stopped`);

    }

    start(){
        console.log(`${this.name} , gets started`);
        console.log(`${Car.wheels} , gets started`);
        
    }


}

class childclass extends Car{
    constructor(name,make,price){
        super(name,make,price);
    }

    static childmethod(){
        console.log(`${childclass.wheels} , gets started childclass`);
    }

}

const c1 = new Car('honda','2024',230000);
c1.start();
Car.stop();
console.log(Car.wheels);
childclass.childmethod();
console.log(childclass.wheels);


