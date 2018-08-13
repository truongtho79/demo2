function Mouse (color){
    this.color = color;
    this.deade = false;
}
Mouse.prototype.die = function(){
    this.deade = true;
}
var jery = new Mouse('gray');
console.log(jery);