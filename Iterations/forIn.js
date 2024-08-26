//ForIn

const myObj = {
    'rs': 'Rust',
    'js': 'javascript',
    'py': 'python',
    'cpp': 'C++',
    'swift': 'swift by apple',
}
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}
// for (const [key,value] of myObj) {
//      console.log(`${key} shortcut is for ${value}`);
//     console.log(key+"shortcut is for "+value);
// }  it's not irritable

const programming=['rs','js','py','java','cpp']

for (const key in programming) {
    console.log(`${programming[key]} is on ${key}`);
}

// const map = new Map();

// map.set('Ind','India')
// map.set('Usa','United States')
// map.set('NZ','New Zealand')
// for (const key in map) {
//     console.log(key);
// }
//we can't use forIn  loop on map