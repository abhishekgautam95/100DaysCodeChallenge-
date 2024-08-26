const coding=['rs','js','py','java','cpp']

// coding.forEach((item) => {
//     console.log(coding);
// })

// const coding=['rs','js','py','java','cpp']

// const value=coding.forEach((item) => {

//     // console.log(item);
//     return item;
// });
// console.log(value);

// const myNums=[1,2,3,4,5,6,7,8,9]
// const newNums=myNums.filter((num)=>num>4)
// console.log(newNums);


//Scop method 
// const myNums = [1,2,3,4,5,6,7,8 ]

// const newNums = myNums.filter((num)=>{
//    return num>4 
// })
// console.log(newNums);

//For Each
 
const myNums = [1,2,3,4,5,6,7,8,9,10] 

const newNums=[]

myNums.forEach((num)=>{//callback
    if(num>4) {
        newNums.push(num)

    }
});
console.log(newNums);