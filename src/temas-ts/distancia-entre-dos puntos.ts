
class Punto {
   
    x: number;
    y: number;
    x1: number;
    y1: number;

    constructor(x: number, y: number, x1: number, y1: number) {
        
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
    }

    calcularDistancia(): number {
        const dist = Math.sqrt((this.x1 - this.x) * (this.x1 - this.x) + (this.y1 - this.y) *(this.y1 - this.y));
        return dist;
    }
}


const puntos = new Punto(-4, -3, 2, 5);
const distancia = puntos.calcularDistancia();

console.log(`La distancia entre los puntos es: ${distancia}`);


