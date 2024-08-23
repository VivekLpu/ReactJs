// class Vehicle {
//     constructor(make, model) {
//         this._make = make;
//         this._model = model;
//     }

//     static compareVehicles(vehicle1, vehicle2) {
//         return vehicle1._make === vehicle2._make && vehicle1._model === vehicle2._model;
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, mileage) {
//         super(make, model);
//         this._year = year;
//         this._mileage = mileage;
//     }

//     getDetails() {
//         return `${this._year} ${this._make} ${this._model}, Mileage: ${this._mileage} miles`;
//     }

//     drive(distance) {
//         this._mileage += distance;
//     }

//     compareCars(otherCar) {
//         return Car.compareVehicles(this, otherCar);
//     }
// }

// const car1 = new Car("Toyota", "Camry", 2020, 15000);
// const car2 = new Car("Honda", "Civic", 2019, 20000);

// console.log(car1.getDetails()); 
// console.log(car2.getDetails()); 

// car1.drive(100);
// console.log(car1.getDetails());

// console.log(Car.compareVehicles(car1, car2));
// console.log(car1.compareCars(car2));


function createVehicleClass(){
    class Vehicle{
        #make;
        #model;
        constructor(make,model){
            this.#make = make;
            this.#model = model;
        }

        getDetails(){
            console.log(`Model: ${this.#model}, Make: ${this.#make}`);
        }
    }

    const car1 = new Vehicle(2010,'etios');
    car1.getDetails();

    const car2 = new Vehicle(2010,'etios');
    car2.getDetails();
    
};

createVehicleClass();