// const programming=['rs','js','py','java','cpp']
const coding=['rs','js','py','java','cpp']

// programming.forEach(function (value){
//     console.log(value);
// }) 

// programming.forEach(function (item){
//     console.log(item);
// });

function printme(item){
    console.log(item);
}
// console.log(printme);
// coding.forEach(printme);

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding = [
    {
        language:"JavaScript",
        languageFileName:"js"
    },
    {
        language:"Java",
        languageFileName:"java"
    },
    {
        language:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
}) 