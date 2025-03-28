// Console
// log

console.log("¡Hola, Javascript!")

// error

console.error("Este es un mensaje de error")
console.error("Error al conectarse a la base de datos", new Error("Conexión fallida"))

// warn

console.warn("Es es un mensaje de advertencia")

// info

console.info("Este es un mensaje de información adicional")

// table

let data = [
    ["Jose", 22],
    ["Hidalgo", 21]
]

console.table(data)

data = [
    {name: "Jose", age : 22},
    {name: "Hidalgo", age : 21}
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Jose")
console.log("Edad: 37")
console.groupEnd()

// time

console.time("Tiempo de ejecución")

for (let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución")

// assert

let age = 18
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("El seguimiento de la ejecución")
}

funcA()

//clear

console.clear() //Se limpia toda la consola