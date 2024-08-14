console.log("..............Array..............");

const Marvel_Heros =['Ironman', 'Spider', 'Thor','Deadpool']
const DC_Heros =['Super man','Sazam','Batman','Flash']
const Indian_Heros =['Shaktiman','Baalveer','Hanuman','Abhishek']

// console.log(Marvel_Heros);
// console.log(DC_Heros);

// console.log("**Use of Push Method**");
// Marvel_Heros.push(DC_Heros)
// console.log(Marvel_Heros);
// console.log(Marvel_Heros[3]);

// console.log("*****Use of Concat Method*****");
// const all_Heros=Marvel_Heros.concat(DC_Heros)
// console.log(all_Heros);

console.log(".........A Simple method for Array...........");
const All_Heros= [...Marvel_Heros, ...DC_Heros,...Indian_Heros]
console.log(All_Heros);
console.log(All_Heros[11]);

const Array0 = [0,1,2,3,4,[2,4,5,[9,10,[11,12],13,],14],5,6,7,8] 
console.log(Array0); 
console.log(Array0.length);
// console.log(Array.);
console.log("Use of flat methods");
const Array2 = Array0.flat(Infinity)
console.log(Array2);


console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.of("Abhishek"));
