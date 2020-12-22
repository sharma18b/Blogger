const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];
//console.log(people);
module.exports = {
people,
ages
};
const os  = require('os');
console.log(os.platform(),os.homedir());