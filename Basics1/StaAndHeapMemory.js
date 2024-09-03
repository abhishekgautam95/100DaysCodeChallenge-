// Stack Memory(Primitive type) and Heap Memory(Nonprimitive type)



let myName ="Abhishek Gautam"

let ChangedName = myName
ChangedName ="Bittu"
console.log("My name is "+myName +" and ");

console.log("Changed name is "+ChangedName);

let userOne ={
    Email: "abhishek-gautam netlify.app",
    upi : "abhi@yml"
}

let  userTwo = userOne

userTwo.Email = "abhigautam@gmail.com" 

console.log(userOne);
console.log(userTwo);
