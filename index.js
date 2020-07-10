function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color){
this.color = color;
}

// Shape.prototype.draw = function(){
//     console.log("Drawn");
// }

function Circle(color, radius){
    Shape.call(this, color);
    this.radius = radius;
}

//Circle.prototype = Object.create(Shape.prototype);

// extend(Circle, Shape);

// Circle.prototype.CalculateArea = function(){
//     return this.radius * this.radius * Math.PI;
// }

let circle = new Circle("Red", 5);

