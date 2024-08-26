//map

const map = new Map();

map.set('Ind','India')
map.set('Usa','United States')
map.set('NZ','New Zealand')

// console.log(map);

for (const [key,value] of map) {
    console.log(key+ ":- " + value);
}

// const myObj={
//     'game1':'spider',
//     'game2':'Pubg',
//     'game3':'freefire'
// }
// for (const [key,value] of myObj) {
//     console.log(key+ ":- " + value);
// }