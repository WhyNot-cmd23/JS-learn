// 1. Captura una excepción utilizando try-catch
try {
    let resultado = 10 / 0;
    console.log(resultado);
} catch (error) {
    console.log("Ocurrió un error:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    let valor = undefined;
    console.log(valor.length);
} catch (error) {
    console.log("Error capturado:", error.message);
} finally {
    console.log("Este bloque se ejecuta siempre.");
}

// 3. Lanza una excepción genérica
function lanzarExcepcion() {
    throw new Error("Esta es una excepción genérica.");
}

try {
    lanzarExcepcion();
} catch (error) {
    console.log("Excepción capturada:", error.message);
}

// 4. Crea una excepción personalizada
class MiError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiErrorPersonalizado";
    }
}

// 5. Lanza una excepción personalizada
function validarNumero(numero) {
    if (isNaN(numero)) {
        throw new MiError("El valor proporcionado no es un número.");
    }
    return numero;
}

try {
    validarNumero("abc");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// 6. Lanza varias excepciones según una lógica definida
function evaluarEdad(edad) {
    if (edad < 0) {
        throw new RangeError("La edad no puede ser negativa.");
    } else if (edad < 18) {
        throw new Error("Debes ser mayor de edad.");
    }
    return "Edad válida.";
}

try {
    console.log(evaluarEdad(-5));
} catch (error) {
    console.log("Error:", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    let arr = null;
    console.log(arr.length); // Lanza TypeError
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message);
    } else if (error instanceof ReferenceError) {
        console.log("Error de referencia:", error.message);
    } else {
        console.log("Error desconocido:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let valores = ["10.5", "20", "abc", "30.7", "xyz"];
valores.forEach(valor => {
    try {
        let numero = parseFloat(valor);
        if (isNaN(numero)) {
            throw new Error(`"${valor}" no es un número válido.`);
        }
        console.log(`Número válido: ${numero}`);
    } catch (error) {
        console.log("Error en conversión:", error.message);
    }
});

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personal
function verificarPropiedad(obj, propiedad) {
    if (!obj.hasOwnProperty(propiedad)) {
        throw new MiError(`El objeto no tiene la propiedad "${propiedad}".`);
    }
    return obj[propiedad];
}

try {
    let usuario = { nombre: "Carlos", edad: 30 };
    console.log(verificarPropiedad(usuario, "apellido"));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function realizarOperacionConReintentos(operacion, maxIntentos = 10) {
    let intentos = 0;
    while (intentos < maxIntentos) {
        try {
            return operacion();
        } catch (error) {
            intentos++;
            console.log(`Intento ${intentos}: Error -> ${error.message}`);
        }
    }
    console.log("Se alcanzó el máximo de intentos sin éxito.");
}

realizarOperacionConReintentos(() => {
    if (Math.random() < 0.8) throw new Error("Fallo aleatorio");
    console.log("Operación exitosa");
});
