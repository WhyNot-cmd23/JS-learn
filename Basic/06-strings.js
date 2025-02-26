//Strings

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Brais"))
console.log(greeting.includes("Brais"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Brais", "MoureDev"))

// Template literals (plantillas literales)

let message = `Hola, este es mi 
Curso de JavaScript`

//Así no se puede
console.log("Hola, ${myName}!")

//Así se puede por el uso de comillas invertidas
console.log(`Hola, ${myName}!`)
