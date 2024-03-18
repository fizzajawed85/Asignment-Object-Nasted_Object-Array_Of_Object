console.log(`\n Array Of Object Assignment \n`);

// this is an array of objects representing different cars, & each with his properties. we assign the cars to variables like first, second, third, and then log. //

const car = [
    {
    brand: "Ferrari",
    model: "Daytona",
    year: 2024,
    color: "yellow",
    price: 2226935, // price in dollers
    launchStatus: true,
    expiry: null,
    },
    {
      brand: "Ferrari",
      model: "F8 Tributo",
      color: "Red",
      year: 2021,
      price: 350000, // Price in USD
      launchStatus: true,
    },
    {
        brand: "Ferrari",
        model: "Daytona SP3",
        year: 2024,
        color: "Red",
        price: 2.25, // Million Dollar
        launchStatus: true,
    }, ];

console.log(car);  //print array of three objects.

// assign variable to array of each object. //

const car_1 = car[0];
console.log(`First object in array of car is :`, car_1); // these variable print first object.

const car_2 = car[1];
console.log(`Second object in array of car is :`, car_2); // these variable print second object.

const car_3 = car[2];
console.log(`Third object in array of car is :`, car_3); // these variable print third object.