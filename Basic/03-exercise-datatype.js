// 1. Escribir un comentario en una línea

/* 
2. Escribir un comentario en varias líneas 
*/

// 3. Declarar variables con valores asociados a todos los tipos de datos primitivos
let numero = 42;               // Número
let texto = "Hola, mundo";      // Cadena de texto (String)
let booleano = true;            // Booleano
let indefinido;                 // Undefined
let nulo = null;                // Null
let simbolo = Symbol("simbolo"); // Symbol
let bigInt = 9007199254740991n; // BigInt

// 4. Imprimir por consola el valor de todas las variables
console.log(numero, texto, booleano, indefinido, nulo, simbolo, bigInt);

// 5. Imprimir por consola el tipo de todas las variables
console.log(
  typeof numero,
  typeof texto,
  typeof booleano,
  typeof indefinido,
  typeof nulo,      // Ojo: typeof null devuelve "object" (es un bug de JS)
  typeof simbolo,
  typeof bigInt
);

// 6. Modificar los valores de las variables por otros del mismo tipo
numero = 100;
texto = "Nuevo texto";
booleano = false;
indefinido = undefined;
nulo = null;
simbolo = Symbol("nuevoSimbolo");
bigInt = 1234567890123456789n;

// 7. Modificar los valores de las variables por otros de distinto tipo
numero = "Ahora soy un string";
texto = 3.14;
booleano = "falso";
indefinido = 99;
nulo = true;
simbolo = 42;
bigInt = "123456";

// 8. Declarar constantes con valores asociados a todos los tipos de datos primitivos
const PI = 3.1416;
const saludo = "Hola!";
const esVerdadero = true;
const sinValor = undefined;
const vacio = null;
const idUnico = Symbol("ID");
const numeroGrande = 987654321n;

// 9. Intentar modificar los valores de las constantes (esto generará un error)
// PI = 3.15;  // ❌ Esto provocará un error porque PI es una constante

// 10. Comentar las líneas que produzcan errores
// console.log(PI); // Funciona correctamente
// console.log(PI = 3.15); // ❌ Esto provocará un error
