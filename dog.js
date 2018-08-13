function Dog(color){
    this.color = color;
    this.age = 4;
    this.stomach = [];
}
Doc.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}