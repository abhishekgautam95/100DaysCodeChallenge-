//Scope = function Scope () {}; 
//Global and local Scope 
var c =300;
let a=120
const b=220;
if (true) {
    let a = 10
    const b = 20
    var c = 30 //var is not 
    console.log("Inner Scope is : " + a );
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
console.log(b);
// console.log(c); 