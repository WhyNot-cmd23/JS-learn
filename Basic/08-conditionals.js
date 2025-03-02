//if. else if, else

//if(si)

let age = 37

if(age == 37){
    console.log("La edad es 37")
}


//else (sino)

if(age == 37){
    console.log("La edad es 37")
}else if(age<18){
    console.log("Es menor de edad")
}
else{
    console.log("La edad no es 37")
}

//Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"

console.log(message)

//switch

let day = 0
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
}

console.log(dayName)