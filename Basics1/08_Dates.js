let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString( ));
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);


// let myCreated = new Date(2024,7,11);

// let myCreated = new Date('2024-08-11');
// let myCreated = new Date('08-11-2024');
let myCreated = new Date('8-11-2024');
console.log(myCreated.toDateString());


// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
console.log(myDate.getMonth());

let myTimeStamp =Date.now()

console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',
    {
        weekday: "long",
        // timeZone:""
    }
);
