// 1. Crea una función que utilice error correctamente
function mostrarError() {
    console.error("¡Esto es un error crítico!");
}
mostrarError();

// 2. Crea una función que utilice warn correctamente
function mostrarAdvertencia() {
    console.warn("¡Cuidado! Esto es una advertencia.");
}
mostrarAdvertencia();

// 3. Crea una función que utilice info correctamente
function mostrarInformacion() {
    console.info("Esta es una información útil para el usuario.");
}
mostrarInformacion();

// 4. Utiliza table
function mostrarTabla() {
    let personas = [
        { nombre: "Juan", edad: 30 },
        { nombre: "Ana", edad: 25 },
        { nombre: "Carlos", edad: 35 }
    ];
    console.table(personas);
}
mostrarTabla();

// 5. Utiliza group
function agruparMensajes() {
    console.group("Mensajes agrupados");
    console.log("Mensaje 1");
    console.log("Mensaje 2");
    console.log("Mensaje 3");
    console.groupEnd();
}
agruparMensajes();

// 6. Utiliza time
function medirTiempo() {
    console.time("Tiempo de ejecución");
    for (let i = 0; i < 1000000; i++) {} // Bucle para simular un proceso
    console.timeEnd("Tiempo de ejecución");
}
medirTiempo();

// 7. Valida con assert si un número es positivo
function validarNumero(numero) {
    console.assert(numero > 0, "El número no es positivo:", numero);
}
validarNumero(-5);
validarNumero(10);

// 8. Utiliza count
function contarLlamadas() {
    console.count("Llamada a la función");
}
contarLlamadas();
contarLlamadas();
contarLlamadas();

// 9. Utiliza trace
function trazaError() {
    console.trace("Seguimiento de la ejecución");
}
trazaError();

// 10. Utiliza clear
function limpiarConsola() {
    console.clear();
    console.log("Consola limpiada correctamente.");
}
limpiarConsola();
