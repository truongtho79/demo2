var Cat = require('./cat.js');
var Mouse = require('./mouse.js');
var Dog = require('./dog.js')

var jery = new Cat('gray');
var chelie = new Dog('white');
var jerymi = new Mouse('gray');
chelie.eat(jerymi);
jery.eat(jerymi);
console.log(jery);
console.log(chelie);
console.log(jery);