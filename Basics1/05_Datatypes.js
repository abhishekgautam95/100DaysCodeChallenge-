/* Primitive Data Types
There are several different types of primitive data types 
1->String , 2->Boolean , 3->Number , 4-> null , 5-> undefined ,6-> Symbol, 7-> BigInt
*/

const name = "Abhishek"
const isLoggedIn = false 

const Score = 120
const SR = 125.5

const outsideTemperature = null

let userEmail;
 const userName = undefined

 const id =Symbol('123')
 const anotherId = Symbol('123')
 console.log(id ===anotherId);

 const BigInt = 131231144343415311111553n
 console.log(BigInt)


/*Reference(Non primitive) 
1-> Array, 2-> Object, 3-> Function */

const heros = ["abhi","shiva","aniket",]

let myObj = {
    Name : "Abhishek Gautam" ,
    age : 22 ,

}

const myfunction = function () {

}

console.log(typeof name);
console.log(typeof myfunction);
console.log(typeof Score);
console.log(typeof SR);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemperature);
console.log(typeof userName);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof BigInt);