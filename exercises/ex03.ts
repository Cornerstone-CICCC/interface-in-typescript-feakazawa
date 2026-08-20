interface Shape {
  calculatePerimeter(): number;
  calculateArea(): number;
}

interface Rectangle extends Shape {
  length: number;
  height: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  length: number;
}

let myRectangle: Rectangle;
myRectangle = {
  length: 4,
  height: 10,

  calculateArea(): number {
    return this.length * this.height;
  },

  calculatePerimeter(): number {
    return this.length * 2 + this.height * 2;
  },
};

let myCircle: Circle;
myCircle = {
  radius: 5,

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  },

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  },
};

let mySquare: Square;
mySquare = {
  length: 3,

  calculateArea(): number {
    return Math.pow(this.length, 2);
  },

  calculatePerimeter(): number {
    return 4 * this.length;
  },
};

console.log("Rectangle area:", myRectangle.calculateArea());
console.log("Rectangle perimeter:", myRectangle.calculatePerimeter());
console.log("Circle area:", myCircle.calculateArea());
console.log("Circle perimeter:", myCircle.calculatePerimeter());
console.log("Square area:", mySquare.calculateArea());
console.log("Square perimeter:", mySquare.calculatePerimeter());
