// Exportación de módulos

export function add(a, b){
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1516

// Exportación por defecto

export default function substract(a, b){
    return a -b 
}

// Clases

export class Circle{
    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

export const EMAIL = "luighi199@gmail.com"

// Exportación por defecto

export default function substract(a, b){
    return a -b
}

export default class MyClass{
    func(){
        console.log("Mi clase")
    }
}