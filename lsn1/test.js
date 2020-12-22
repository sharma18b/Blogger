var name = "hello";
console.log(name);
const xyz = require('./people');
console.log(xyz.people[0] + "   " + xyz.ages[0]);
//console.log(people);
const fs = require('fs');
fs.readFile('./docs/blog1.txt' , (err,data) => {
if (err) {
console.log(err);
}
console.log(data.toString());
});

// writing file

//console.log(p);
