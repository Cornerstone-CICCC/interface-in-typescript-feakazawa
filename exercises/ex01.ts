interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;

  calculatePerimeter(): number;
  calculateArea(): number;
  isTriangle(): boolean;
}

let myTriangle: Triangle;
myTriangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5,

  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  },

  calculateArea(): number {
    const s = this.calculatePerimeter() / 2;
    const heronFormula = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );
    return heronFormula;
  },

  isTriangle(): boolean {
    const checkSideA = this.sideA < this.sideB + this.sideC;
    const checkSideB = this.sideB < this.sideA + this.sideC;
    const checkSideC = this.sideC < this.sideA + this.sideB;

    return checkSideA && checkSideB && checkSideC ? true : false;
  },
};

console.log(myTriangle.calculatePerimeter()); // 12
console.log(myTriangle.calculateArea()); // 6
console.log(myTriangle.isTriangle()); // true
