//Exportaciones
// 1. Exporta una función
export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// 2. Exporta una constante
export const PI = 3.1416;

// 3. Exporta una clase
export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return `Soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// 7. Exporta una función, una constante y una clase por defecto
export default function despedida(nombre) {
    return `Adiós, ${nombre}!`;
}


//Importaciones

// 4. Importa una función
import { saludar } from "./modulo.js";
console.log(saludar("Carlos"));

// 5. Importa una constante
import { PI } from "./modulo.js";
console.log(`El valor de PI es: ${PI}`);

// 6. Importa una clase
import { Persona } from "./modulo.js";
const persona1 = new Persona("Ana", 25);
console.log(persona1.presentarse());

// 8. Importa una función, una constante y una clase por defecto
import despedida, { saludar as saludo, PI as piValor, Persona as Usuario } from "./modulo.js";
console.log(despedida("Carlos"));
console.log(saludo("María"));
console.log(`PI: ${piValor}`);
const usuario = new Usuario("Pedro", 30);
console.log(usuario.presentarse());
