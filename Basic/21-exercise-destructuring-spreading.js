// 1. Usa desestructuración para extraer los dos primeros elementos de un array
const numeros = [10, 20, 30, 40];
const [primero, segundo] = numeros;
console.log(primero, segundo); // 10 20

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const [a, b, c = 100] = [1, 2];
console.log(a, b, c); // 1 2 100

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const persona = { nombre: "Ana", edad: 25, ciudad: "Barcelona" };
const { nombre, edad } = persona;
console.log(nombre, edad); // Ana 25

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona, edadPersona); // Ana 25

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const usuario = { id: 1, info: { email: "correo@example.com", telefono: "123456789" } };
const { info: { email, telefono } } = usuario;
console.log(email, telefono); // correo@example.com 123456789

// 6. Usa propagación para combinar dos arrays en uno nuevo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]

// 7. Usa propagación para crear una copia de un array
const copiaArray = [...array1];
console.log(copiaArray); // [1, 2, 3]

// 8. Usa propagación para combinar dos objetos en uno nuevo
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objetoCombinado = { ...objeto1, ...objeto2 };
console.log(objetoCombinado); // { a: 1, b: 2, c: 3, d: 4 }

// 9. Usa propagación para crear una copia de un objeto
const copiaObjeto = { ...objeto1 };
console.log(copiaObjeto); // { a: 1, b: 2 }

// 10. Combina desestructuración y propagación
const [primeroNum, ...restoNumeros] = numeros;
console.log(primeroNum); // 10
console.log(restoNumeros); // [20, 30, 40]

const { nombre: nombreUsuario, ...restoDatos } = persona;
console.log(nombreUsuario); // Ana
console.log(restoDatos); // { edad: 25, ciudad: "Barcelona" }
