// 1. Crea una variable para cada operación aritmética
let suma = 10 + 5;
let resta = 20 - 8;
let multiplicacion = 4 * 6;
let division = 25 / 5;
let modulo = 17 % 3;
let exponente = 2 ** 3; // 2 elevado a la 3

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let x = 10;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 4;  // x = x / 4
x %= 3;  // x = x % 3
x **= 2; // x = x ** 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5);   // true
console.log(8 >= 8);   // true
console.log(5 == "5"); // true (comparación débil)
console.log(3 === 3);  // true (comparación estricta)
console.log(4 !== 5);  // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10 < 5);   // false
console.log(8 <= 7);   // false
console.log(5 === "5");// false (comparación estricta)
console.log(4 != 4);   // false
console.log(3 > 10);   // false

// 5. Utiliza el operador lógico AND (&&)
console.log(true && true);   // true
console.log(10 > 5 && 8 < 12); // true
console.log(5 > 3 && 3 > 7); // false

// 6. Utiliza el operador lógico OR (||)
console.log(true || false);  // true
console.log(10 < 5 || 8 > 3); // true
console.log(3 > 7 || 4 < 2);  // false

// 7. Combina ambos operadores lógicos
console.log((10 > 5 && 8 < 12) || (5 > 3 && 3 > 7)); // true

// 8. Añade alguna negación
console.log(!true);  // false
console.log(!(10 > 5)); // false

// 9. Utiliza el operador ternario
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// 10. Combina operadores aritméticos, de comparación y lógicos
let a = 10, b = 20, c = 30;
console.log((a + b > c) && (b - a < c) || !(c % a === 0)); // Evaluación combinada
