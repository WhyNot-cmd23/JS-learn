// 1. Suma de dos números
function suma(a, b) {
    return a + b;
}

// 2. Encontrar el mayor número en un array
function maximoNumero(array) {
    return Math.max(...array);
}

// 3. Contar el número de vocales en un string
function contarVocales(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}

// 4. Convertir un array de strings a mayúsculas
function convertirMayusculas(array) {
    return array.map(str => str.toUpperCase());
}

// 5. Determinar si un número es primo
function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// 6. Encontrar elementos comunes en dos arrays
function elementosComunes(arr1, arr2) {
    return arr1.filter(elemento => arr2.includes(elemento));
}

// 7. Sumar todos los números pares de un array
function sumaPares(array) {
    return array.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

// 8. Elevar al cuadrado cada número de un array
function elevarCuadrado(array) {
    return array.map(num => num ** 2);
}

// 9. Invertir el orden de las palabras en una cadena
function invertirPalabras(cadena) {
    return cadena.split(' ').reverse().join(' ');
}

// 10. Calcular el factorial de un número
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
