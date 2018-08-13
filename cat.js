function Cat(color){
    this.color = color;
    this.age = 2;
    this.stomach = [];
}
Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}
