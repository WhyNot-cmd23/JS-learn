//Objetos

//Sintaxis

let person = {
    name: "Jose",
    age: 23,
    alias: "sKend"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

//Notación de corchetes
console.log(person["name"])

//Modificación

person.name = "Jose"
console.log(person.name)

person.age = "37"
console.log(person.age)

//Eliminacion de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "luighi199@gmail.com"

console.log(person)

person["age"] = 37

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Brais",
    age:37,
    alias: "sKend",
    walk: function(){
        console.log("La persona camina")
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "Brais",
    age:37,
    alias: "sKend",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name:"Programador",
        experiencia: 15,
        work: function(){
            console.log(`La persona de ${this.experiencia} años de experiencia trabaja`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Jose",
    age:37,
    alias: "sKend",
    age: 22
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for(let key in person4){
    console.log(key + ": " + person4[key])
}

// Funciones como objects

function Person(name, age){
    this.name = name
    this.age = age
}

let person5 = new Person("Jose", 22)
console.log(person5)

console.log(typeof person5)
console.log(typeof person4)