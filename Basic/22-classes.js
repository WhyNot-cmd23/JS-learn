//Classes

let person1 = {
    name: "Jose",
    age: 23,
    alias: "sKend"
}

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//Sintaxis

let person = new Person("Jose", 22, "sKend")

console.log(person)

//Valores por defecto

class DefaultPerson{
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Jose", 22)

console.log(person3)

//Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "sKend"

console.log(person3.alias)

//Funciones en clases

class Person2{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("La persona camina")
    }
}

let person4 = new PersonWithMethod("Jose", 22, "sKend")
person4.walt()

// Propiedades privadas

class PrivatePerson{

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.bank = bank //Al poner el # asi this.#bank se vuelve un valor protegido
    }

    pay(){
        this.bank
    }
}

let person5 = new PrivatePerson("Jose", 22, "sKend", "daagdsgsd")

person5.bank

//No podemos acceder
//console.log(person5.bank)
//person5.bank = "new JOS352342" //bank no es #bank

console.log(person5)

// Getters and Setters

class GetPerson{

    #name
    #age
    #alias
    #bank

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias",bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
}

let person6 = new GetPerson("Jose", 22, "sKend", "daagdsgsd")
console.log(person6)
console.log(person6.name)

person6.bank = "new JOS156484"

//Herencia

class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log(("Emite un sonido genérico"))
    }
}

class Dog extends Animal{

    sound(){

    }

    run(){
        console.log("El perro corre")
    }
}

class Fish extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }
    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog("JosDog")
myDog.run()
myDog.sound()

let myFish = new Fish("JosFish", 10)
myFish.swim()
myFish.sound()


// Métodos estáticos

class MathOperations{

    static sum(a,b){
        return a + b
    }
}

let myClass = new MathOperations()
console.log(myClass.sum(5, 10)) // No funciona

console.log(MathOperations.sum(5,10)) // Funciona porque no se necesita instanciar

