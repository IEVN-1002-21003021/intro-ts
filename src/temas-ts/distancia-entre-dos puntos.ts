
function calcularDistancia(punto1: { x: number, y: number }, punto2: { x: number, y: number }): number {
    const deltaX = punto2.x - punto1.x;
    const deltaY = punto2.y - punto1.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}


const puntoA = { x: 1, y: 2 };
const puntoB = { x: 4, y: 6 };


const distancia = calcularDistancia(puntoA, puntoB);
console.log(`La distancia entre los puntos es ${distancia}`);