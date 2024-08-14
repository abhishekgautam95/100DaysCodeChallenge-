//Singleton 
//Object.create


//Object literals 
const MySym=Symbol('Key1')

const JsUser = {

    name: "Abhishek",
    "Full name": "Abhishek Gautam",
    [MySym]:"NewKey",
    age : 21,
    location: "Sambhal",
    email:"abhishek@gmail.com",
    isLoggedIn: false,
    lastloggingDay:["Sunday","Monday"]

}
console.log(JsUser["name"])

// console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log("....Use of  Method....")

console.log(JsUser);

console.log("....Use of Symbol....");
console.log([MySym]);

console.log(MySym);

console.log("....Use of Freeze....");
JsUser.name = "Abhi"
// Object.freeze(JsUser);
JsUser.name = "ABHISHEK"
console.log(JsUser);

console.log("How to add Functions in Object ,with greerting");

JsUser.greeting = function(){
    console.log("Hello World!");
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);//Gives a reference only of function

JsUser.greetingTwo = function(){
    console.log(`Hello World , This is ${this.name}`);

}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

