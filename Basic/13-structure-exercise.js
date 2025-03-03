// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Elefante", "Tigre", "León"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Águila"); // Añadir al inicio
animales.push("Panda"); // Añadir al final
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1); // Elimina el elemento en índice 2
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set(["1984", "Cien años de soledad", "El principito", "Don Quijote", "Moby Dick"]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add("Harry Potter");
libros.add("1984"); // No se añadirá porque los Sets no permiten duplicados
console.log(libros);

// 6. Elimina uno concreto a tu elección
libros.delete("El principito");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"]
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log("El mes 5 es:", meses.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let numeros = [1, 2, 3, 4, 5, 5, 6, 7];
let numerosSet = new Set(numeros); // Eliminamos duplicados
let mapaNumeros = new Map();
mapaNumeros.set("numerosUnicos", numerosSet);
console.log(mapaNumeros);
