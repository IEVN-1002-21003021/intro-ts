
export class Punto {
   
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

    calcularDistancia(x:number,y:number,x1:number,y1:number): number {
        const dist = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) *(y1 -y));
        return dist;
    }
}


const puntos = new Punto(-4, -3, 2, 5);
const distancia = puntos.calcularDistancia(-4, -3, 2, 5);

console.log(`La distancia entre los puntos es: ${distancia}`);


