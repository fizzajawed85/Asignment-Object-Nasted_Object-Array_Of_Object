
console.log(`\n Object Assignment \n`);


let car :{
    brand:string;
    model:string;
    year:number;
    color:string;
    price :number;
    launchStatus:boolean;
    expiry :null;

} = {
    brand :"Ferrari",
    model :"Daytona",
    year : 2024,
    color : "yellow",
    price : 2226935, // price in dollers
    launchStatus :true,
    expiry : null,
    
};
        
    
console.log(car);
console.log(car.color);
console.log(car.year, car.brand, car.model );
console.log(car.price, car.launchStatus, car.expiry);



console.log(`\n Another Car Object with properties of various DataTYpes \n` );


const Car = {
    brand: "Ferrari",
    model: "F8 Tributo",
    color: "Red",
    year: 2021,
    price: 350000, // Price in USD
    launchStatus: true,
      
};


console.log(Car);
console.log(Car.brand, Car.model, Car.color);
console.log(Car.year, Car.price, Car.launchStatus);
        




