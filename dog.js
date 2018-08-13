function Dog(color){
    this.color = color;
    this.age = 4;
    this.stomach = [];
}
Dog.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}

module.exports = Dog;