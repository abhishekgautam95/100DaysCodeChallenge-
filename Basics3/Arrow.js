//Arrow Function

const user = {
    username: 'Abhisshek',
    price:999,
    welcomeMessage:function() {
        console.log(`${this.username},Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'Abhisshek Gautam';
// user.welcomeMessage();
// console.log(this);//refer to an empty object


function login(){
    let username ='abhi'
    // console.log(this);
    // console.log(this.username);//Undefined
}
login();

// ()=>{} Arrow Function
// or ()=>()
// const addTwo=(num1,num2)=>{
//     return num1 + num2;
// }
// const addTwo =(num1,num2)=>(num1 + num2);
// const addTwo = (num1,num2) => num1 + num2



const addTwo = (num1,num2)=>({username :'AbhiGautam'})
console.log(addTwo(5,3));

// const myArray=[1,2,3,4,5,6,7,8]
// myArray.forEach()

