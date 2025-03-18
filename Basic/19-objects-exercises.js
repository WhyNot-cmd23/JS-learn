// 1. Crea un objeto con 3 propiedades
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log(persona);

// 2. Accede y muestra su valor
console.log(persona.nombre);

// 3. Agrega una nueva propiedad
persona.profesion = "Ingeniero";
console.log(persona);

// 4. Elimina una de las 3 primeras propiedades
delete persona.ciudad;
console.log(persona);

// 5. Agrega una función e invócala
persona.saludar = function() {
    return `Hola, soy ${this.nombre}`;
};
console.log(persona.saludar());

// 6. Itera las propiedades del objeto
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 7. Crea un objeto anidado
persona.direccion = {
    calle: "Avenida Siempre Viva",
    numero: 123
};
console.log(persona);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona.direccion.calle);

// 9. Comprueba si dos objetos creados son iguales
const persona2 = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

console.log(JSON.stringify(persona) === JSON.stringify(persona2)); // false, porque la dirección es diferente

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona.nombre === persona.edad); // false, porque tienen valores distintos
