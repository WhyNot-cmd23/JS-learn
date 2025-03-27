// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// 2. Añade un método a la clase que utilice las propiedades
class PersonaConMetodo extends Persona {
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const persona1 = new PersonaConMetodo("Juan", 25);
console.log(persona1.presentarse());

// 4. Añade un método estático a la primera clase
class PersonaConEstatica extends Persona {
    static saludar() {
        return "Hola desde un método estático.";
    }
}

// 5. Usa el método estático
console.log(PersonaConEstatica.saludar());

// 6. Crea una clase que haga uso de herencia
class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    info() {
        return `${this.nombre} tiene ${this.edad} años y está en el grado ${this.grado}.`;
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        } else {
            console.log("El precio no puede ser negativo.");
        }
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class ProductoPrivado {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get precio() {
        return this.#precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this.#precio = nuevoPrecio;
        } else {
            console.log("El precio no puede ser negativo.");
        }
    }
}

// 9. Utiliza los get y set y muestra sus valores
const producto1 = new ProductoPrivado("Laptop", 1500);
console.log(producto1.nombre);  // Accede con get

producto1.nombre = "Tablet";  // Modifica con set
console.log(producto1.nombre);  // Verifica cambio

// 10. Sobrescribe un método de una clase que utilice herencia
class Profesor extends Persona {
    constructor(nombre, edad, materia) {
        super(nombre, edad);
        this.materia = materia;
    }

    // Sobrescribiendo el método de la clase padre
    presentarse() {
        return `Hola, soy el profesor ${this.nombre}, tengo ${this.edad} años y enseño ${this.materia}.`;
    }
}

const profesor1 = new Profesor("María", 40, "Matemáticas");
console.log(profesor1.presentarse());
