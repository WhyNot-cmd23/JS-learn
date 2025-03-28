// Importación de módulos

import { add, PI, Circle } from "./28-export-modeules.js";

// funciones

console.log(add(5, 10))

// Propiedades

console.log(PI)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area())


// Importación por defecto

// console.log(resta(5, 10))
//console.log(defaulltImports(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyClass } from "../directory/file.js"

// Módulos externos

const os = require("os")

console.log(os.platform())