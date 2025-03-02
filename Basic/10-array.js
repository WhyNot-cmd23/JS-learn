//Array

//Declaracón

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1]
myArray = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myAerray)
console.log(myAwway2)

myArray = ["Jose", "Hidalgo", "Valdivieso"]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Hola"
myArray2[1] = "Que tal"
myArray2[2] = "Como estas"

myArray = []
myArray[2] = "Jose"
myArray[1] = "Hidalgo"

console.log(myArray)

//Métodos comunes

myArray = []

// push y pop

myArray.push("Jose")
myArray.push("Luighi")
myArray.push("Hidalgo")
myArray.push("Valdivieso")

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer dato del arreglo
console.log(myArray)

myArray.unshift("Jose", "sKens") // Agrega todos los datos desde el inicio al arreglo
console.log(myArray)

//lenght

console.log(myArray.length)

//clear para eliminar los datos del array

myArray = []
myArray.length = 0// alternativa
console.log(myArray)

//slice

myArray.push("Jose", "Hidalgo", "sKens", 23, true)

let myNewArray  = myArray.slice(1, 2)

console.log(myArray)
console.log(myNewArray)

//splice

myArray.splice(1, 3)
console.log(myArray)

myArray =["Jose", "Hidalgo", "sKens", 23, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)

