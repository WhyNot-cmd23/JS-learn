// 1. Concatena dos cadenas de texto
let texto1 = "Hola";
let texto2 = "Mundo";
let concatenado = texto1 + " " + texto2;
console.log(concatenado); // "Hola Mundo"

// 2. Muestra la longitud de una cadena de texto
let cadena = "JavaScript";
console.log(cadena.length); // 10

// 3. Muestra el primer y último carácter de un string
console.log(cadena[0]); // "J"
console.log(cadena[cadena.length - 1]); // "t"

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase()); // "JAVASCRIPT"
console.log(cadena.toLowerCase()); // "javascript"

// 5. Crea una cadena de texto en varias líneas
let multilinea = `Esta es una línea
Esta es otra línea
Y otra más`;
console.log(multilinea);

// 6. Interpola el valor de una variable en un string
let nombre = "Carlos";
let edad = 25;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "Esto es una prueba";
console.log(frase.replace(/ /g, "-")); // "Esto-es-una-prueba"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase.includes("prueba")); // true
console.log(frase.includes("hola"));   // false

// 9. Comprueba si dos strings son iguales
let str1 = "JavaScript";
let str2 = "JavaScript";
console.log(str1 === str2); // true

// 10. Comprueba si dos strings tienen la misma longitud
let str3 = "Python";
console.log(str1.length === str3.length); // false
