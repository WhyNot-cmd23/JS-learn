//Operadores 

//Operadores ariméticos

let a = 15
let b = 10

console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicación
console.log(a / b) //División

console.log(a % b) //Residuo
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

let myVariable = 2 
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b) //Igualdad por valor
console.log(a == 5) 
console.log(a === 5) //Igualdad por identidad (por tipo y valor)
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(undefined == null)
console.log(undefined === null)

//Truthy values (valores verdaderos)

//Todos los números positivos y negativos menos el cero
//Todas las cedenas de texto menos las vacías
//El boolean true

//Falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacías

//Operadores lógicos

// and ($$)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

// or (||)

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

// not (!)
console.log(!true)
console.log(!true)
console.log(!(5 > 10 && 15 >20))
console.log(!(5 > 10 || 15 >20))

// Operadores ternarios
const isRaining = false

isRaining ? console.log("Está lloviendo"): console.log("No está lloviendo")