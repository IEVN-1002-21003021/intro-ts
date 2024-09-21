import { Punto } from "./distancia-entre-dos puntos";

class Triangulo extends Punto {
  protected x3: number;
  protected y3: number;

  constructor(x1: number, y1: number, x: number, y: number, x3: number, y3: number) {
    super(x1, y1, x, y);
    this.x3 = x3;
    this.y3 = y3;
  }

  public estriangulo() {
    const distancia1 = this.calcularDistancia(this.x1, this.y1, this.x, this.y);
    const distancia2 = this.calcularDistancia(this.x, this.y, this.x3, this.y3);
    const distancia3 = this.calcularDistancia(this.x3, this.y3, this.x1, this.y1);

    if (
      (distancia1 + distancia2 > distancia3) &&
      (distancia2 + distancia3 > distancia1) &&
      (distancia3 + distancia1 > distancia2)
    ) {
      console.log("Es un triángulo");
    } else {
      console.log("No es un triángulo");
    }
  }
}

const etrian = new Triangulo(-4, -3, 2, -2, 1, -9);
etrian.estriangulo();