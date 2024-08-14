//Array
console.log("Original Array");
const myArray = [0, 1, 2, 3, 4]
const myHeros=["Abhishek", "Shivam", "Aniket"]

console.log(myArray)
// console.log(myArray.length);

const newArray =new Array(1,2,3,4)

// console.log(myArray[0]);

//Array mathods 
console.log("Methods in Array");
// myArray.push(5)
// myArray.push(6)
// myArray.push(7)
// myArray.unshift(10);
// myArray.shift()
console.log(myArray);
console.log(myArray.toString());


// console.log(myArray.length);
// console.log(typeof myArray);

// console.log(myArray.includes(2));
// console.log(myArray.indexOf(2));
console.log("join Method");
const myArray4 = myArray.join();
console.log(myArray4);
console.log(typeof myArray4);

//slice and splice 
console.log("..............slice and splice............... ");

console.log("Slice Method");
console.log("A", myArray);
const myArray2 = myArray.slice(1,3)
console.log(myArray2);
console.log(myArray);

console.log("Splice Method");
console.log("B", myArray);
const myArray3 = myArray.splice(1,3);
console.log(myArray3);
console.log(myArray);

