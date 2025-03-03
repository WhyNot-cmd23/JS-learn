//set

//Declaracion

let mySet = new Set()

//Inicializacion

mySet = new Set(["Jose", "Hidalgo", "sKens", 23, true, "luighi199@gmail.com"])


console.log(mySet)

//Métodos comunes

// add y delete

mySet.add("Hola")

console.log(mySet)

mySet.delete("Hola")

console.log(mySet)

console.log(mySet.delete("Jose")) //devuelve true
console.log(mySet.delete(4)) //devuelve false

console.log(mySet)


//has

console.log(mySet.has("Jose"))
console.log(mySet.has("Aña"))

//size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("Jose")
mySet.add("Jose")
mySet.add("Jose")
mySet.add("Jose")
mySet.add("Jose")
console.log(mySet)