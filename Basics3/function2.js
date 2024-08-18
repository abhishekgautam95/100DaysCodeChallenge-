//Function with objects

function calculateCartPrice(...amount){//Rest Operaters
    return amount ;

}

// console.log(calculateCartPrice(10,20,30,40)); 

const user ={
    username:'Abhi',
    price: 10
}
// console.log(user);

function handelObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
    
}
 handelObject(user);
 handelObject({
    username: 'abhi',
    price: '10'
 })

 const array =[12,13,14,15]

 function returnSecondValue(getarray) {
    return getarray[1]
}
console.log(returnSecondValue(array));
console.log(returnSecondValue([11,21,31]));