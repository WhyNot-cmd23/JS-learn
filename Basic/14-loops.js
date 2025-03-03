// Loops o bucles

//for 

for(let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.lenght; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 6;
while (i < 5){
    console.log(`Hola ${i}`)
    i++
}

//Blue infinito
/*
while(true){
}
*/

//do while

do{
    console.log(`Hola ${i}`)
}while(i<5)

//for of
myArray = ["Jose", "Hidalgo", "Valdivieso"]

mySet = new Set(["Jose", "Hidalgo", "sKens", 23, true, "luighi199@gmail.com"])

myMap = new Map([
    ["nombre","Jose"],
    ["email","luighi199@gmail.com"],
    ["age",23],
])

myString = "!Hola, JavaScript"

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

for(let valor of myString){
    console.log(valor)
}

//Buenas practicas

//break y continue

for(let i = 0; i < 10; i++){
    if(i == 5){
        continue
    }else if(i == 7){
        break
    }
    console.log(`Hola ${i}`)
}