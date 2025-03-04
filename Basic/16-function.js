// Funciones

function myFunc(){
    console.log("Hola que tal")
}

myFunc()

for(let i = 0; i <5; i++){
    myFunc()
}

//Con parametros

function myFuncParams(name){
    console.log("Hola",name)
}

myFuncParams("Jose")
myFuncParams("Hidalgo")

//Funciones anónimas

const myFunc2 = function (name){
    console.log("Hola",name)
}

myFunc2("sKird")

// Arrow functions

const myFunc3 = (name) =>{
    console.log(`Hola ${name}`)
}

myFunc3("Lart")

//Parámetros

function defaultSum(a = 0 ,b = 0){
    console.log(a + b)
}

// Por Defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno valor

function mult(a ,b){
    return a * b
}

let result = mult(5, 10)
console.log(result)

//Funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

//Funciones de orden superior

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc3, "función de orden superior")

// forEach
myArray = [1, 2, 3, 4]

mySet = new Set(["Jose", "Hidalgo", "sKens", 23, true, "luighi199@gmail.com"])

myMap = new Map([
    ["nombre","Jose"],
    ["email","luighi199@gmail.com"],
    ["age",23],
])

myArray.forEach(function(value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))

