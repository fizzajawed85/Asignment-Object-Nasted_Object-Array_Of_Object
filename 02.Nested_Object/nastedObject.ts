
console.log(`\n Nasted Object Assignment \n`);

const car ={
    brand :"Ferrari",
    model :"Daytona SP3",
    year : 2024,
    color : "red",
    price : 2.25,       // Million Dollar
    launchStatus :true,
    otherDetails :{
        segment : "Hypercars",
        engineMotor : 6.5_12 ,   // 6.5litre V12
        horsepower : 829,     // HP
        MPH : 2.85,           // seconds
        speed : "7- speed dual-cluch automatic",  
        styles :["Roma spider", "Berlinetta", "Spider", "stradale"],
    }

};

console.log(car);
console.log(car.brand, car.model, car.color);
console.log(car.year, car.price, car.launchStatus);
console.log(car.otherDetails);
console.log(car.otherDetails.horsepower, car.otherDetails.MPH);
console.log(car.otherDetails.engineMotor, car.otherDetails.horsepower, car.otherDetails.speed);
console.log(car.otherDetails.styles[0]);
console.log(car.otherDetails.styles[4],car.otherDetails.styles[1],car.otherDetails.styles[2]);








