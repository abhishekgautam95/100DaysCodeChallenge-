const userEmail =[];

if (userEmail) {
    console.log('Got us Email');   
}
else {
    console.log("Don't have user Email");
}

//falsy values

//false , 0 ,-0 ,BigInt 0n,null,NaN,undefined

// truthy Values
// 'false' ,'0'," ",[],{}, function(){}

if (userEmail.length===0) {
    console.log("Array is empty");
}
    
const emptyObj={}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

//Nullish Coalescing Operators

let val1;
// val1 = 5 ?? 10
// val1 = null??10 
// val1 =undefined??15
val1 = null??10??15
console.log(val1);

// Ternary Operators

// condition ? true : false
const iceTeaPrice=100
iceTeaPrice<=90? console.log('less than 90'):console.log('Grater then 90');