//DOM - Document Object Module

// document.getElementById
// document.getElementsByClassName
// document.getElementsBYTagName
// document.querySelector
// document.querySelectorAll

// const elem = document.getElementById("hello");

// elem.style.color = "red"

// const elements = document.getElementsByClassName("container") //array of elements

// console.log(elements[5].style.background = "red")

const elements = document.getElementsByTagName("h1")
elements[0].style.color = "blue"

let count = 1;
setInterval(() => {
    if(count%2 === 1){
        elements[0].innerText = "This is Abhishek"
        count++;
    } else{
        elements[0].innerText = "This is Sachin"
        count++;
    }
    console.log("dsfsd")
}, 1000);


