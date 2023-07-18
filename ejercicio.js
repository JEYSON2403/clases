class Punto {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    suma = (punto) => new Punto(this.x + punto.x, this.y + punto.y);
    toString = () => `(${this.x}, ${this.y})`;
  }
  
  const p1 = new Punto(1, 2);
  const p2 = new Punto(2, 3);
  console.log(p1.suma(p2).toString());
  