function Dog(color){
    this.color = color;
    this.age = 4;
    this.stomach = [];
}
Document.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}