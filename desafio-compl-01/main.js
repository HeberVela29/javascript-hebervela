
let nombre = prompt("Ingrese su nombre por favor")
let apellido = "Vela"
while(nombre == "adrian","azul","heber","julio","charo"){
    switch (nombre){
        case "adrian":
            alert("Bienvenido Adrian " + apellido)
            break
        case "azul":
            alert("Bienvenida Azul " + apellido)
            break
        case "heber":
            alert("Bienvenido Heber " + apellido)
            break
        case "julio":
            alert("Bienvenido Julio " + apellido)
            break
        case "charo":
            alert("Bienvenida Charo Rodríguez")
            break
        default:
            alert("Usted no pertenece a la familia 😠")
    }
    nombre = prompt("Ingrese su nombre por favor")
}