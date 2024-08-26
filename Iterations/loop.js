// for 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    
// }


// for (let i = 0; i< 10; i++) {
//     const element = i;    

//     if (element==5) {
//         console.log('5 is detected');
//     }
//     console.log(element);
// }

for (let i = 1; i<=10; i++) {

    console.log(`Table of : ${i}`);
    for(let j = 1; j<=10; j++) {
        console.log(i+" * "+ j +" = "+ i*j );

    //   console.log(`inner loop value: ${j} and outer loop value: ${i}`);
    // console.log(i);

}

}
// for(let i=1; i<=10; i++) {
//     for(let j=1; j<=10; j++) {
//     console.log(i+" * "+ j +" = "+ i*j );
// }
// }
let myArray = ['abhi','shivam','aniket']
console.log(myArray.length);
for (let index = 0;  index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
    // console.log(myArray);
}

//break and continue

// for (let i = 1; i <=20; i++){

//     // console.log(`value of i is ${i}`);
//     if (i==5) {
//         console.log('dectected 5');
//     break
// }
// console.log(`value of i is ${i}`);
// }

for (let i = 1; i <=20; i++){
    if (i==5) {
        console.log('dectected 5');
    continue;
}
console.log(`value of i is ${i}`);
}
