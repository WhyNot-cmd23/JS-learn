// 1. Imprime por consola tu nombre si una variable tiene valor
let nombre = "Juan";
if (nombre) {
    console.log("Mi nombre es: " + nombre);
}

// 2. Verifica si el usuario y contraseña coinciden con unas establecidas
let usuarioGuardado = "admin";
let contraseñaGuardada = "1234";
let usuarioIngresado = "admin";
let contraseñaIngresada = "1234";
if (usuarioIngresado === usuarioGuardado && contraseñaIngresada === contraseñaGuardada) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

// 3. Verifica si un número es positivo, negativo o cero
testNumber = -5;
if (testNumber > 0) {
    console.log("El número es positivo");
} else if (testNumber < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no
let edad = 16;
if (edad >= 18) {
    console.log("Puedes votar");
} else {
    console.log(`Te faltan ${18 - edad} años para votar`);
}

// 5. Usar operador ternario para asignar "adulto" o "menor" a una variable
let categoria = edad >= 18 ? "adulto" : "menor";
console.log("Eres un " + categoria);

// 6. Determina la estación del año según el mes
let mes = "enero";
let estacion;
switch (mes.toLowerCase()) {
    case "diciembre": case "enero": case "febrero":
        estacion = "Invierno";
        break;
    case "marzo": case "abril": case "mayo":
        estacion = "Primavera";
        break;
    case "junio": case "julio": case "agosto":
        estacion = "Verano";
        break;
    case "septiembre": case "octubre": case "noviembre":
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes no válido";
}
console.log("Estación: " + estacion);

// 7. Mostrar el número de días de un mes
let dias;
switch (mes.toLowerCase()) {
    case "abril": case "junio": case "septiembre": case "noviembre":
        dias = 30;
        break;
    case "febrero":
        dias = 28;
        break;
    default:
        dias = 31;
}
console.log(`El mes de ${mes} tiene ${dias} días`);

// 8. Usar switch para imprimir un saludo según el idioma
let idioma = "es";
switch (idioma) {
    case "es":
        console.log("Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    default:
        console.log("Idioma no reconocido");
}
