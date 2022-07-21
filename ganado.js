//FUNCIONES
function sumatoria (animal1, animal2, animal3, animal4){
    return  animal1 + animal2 + animal3 + animal4;
}


//PORCINO
let lechones, cachorras, cerdos, padrillos
do {
    lechones = parseInt(prompt("¿Cuántos lechones tienes?"))
    console.log (lechones)

    cachorras = parseInt(prompt("¿Cuántos cachorras tienes?"))
    console.log (cachorras)

    cerdos = parseInt(prompt("¿Cuántos cerdos tienes?"))
    console.log (cerdos)

    padrillos = parseInt(prompt("¿Cuántos padrillos tienes?"))
    console.log (padrillos)

    

} while (isNaN(lechones) || isNaN(cachorras) || isNaN(cerdos) || isNaN(padrillos))

let rodeoCerdos = sumatoria (lechones, cachorras, cerdos, padrillos)
alert( "El total de tu rodeo porcino es de " + rodeoCerdos + " animales");

//BOVINO
let terneros, terneras, vaquillonas, toros
do {
    terneros = parseInt(prompt("¿Cuántos terneros tienes?"))
    console.log (terneros)

    terneras = parseInt(prompt("¿Cuántos terneras tienes?"))
    console.log (terneras)

    vaquillonas = parseInt(prompt("¿Cuántos vaquillonas tienes?"))
    console.log (vaquillonas)

    toros = parseInt(prompt("¿Cuántos toros tienes?"))
    console.log (toros)

} while(isNaN(terneros) || isNaN(terneras) || isNaN(vaquillonas) || isNaN(toros))

let rodeoVacas = sumatoria (terneros, terneras, vaquillonas, toros)
alert( "El total de tu rodeo bovino es de " + rodeoVacas + " animales");


//TOTAL Y PORCENTAJE
let totalRodeo = (rodeoCerdos + rodeoVacas)
let datoPorcentaje, porcentajeCerdos, porcentajeVacas 
do{
    alert("Tienes " + totalRodeo + " animales")
    datoPorcentaje = prompt ("¿Quieres que te diga que porcentaje representa cada tipo de ganado? (si/no)")

    if (datoPorcentaje == "si") {
        porcentajeCerdos = rodeoCerdos / totalRodeo * 100
        porcentajeVacas = rodeoVacas / totalRodeo * 100 
        
        alert("El ganado porcino representan el " + porcentajeCerdos + " % del total")
        alert("El ganado bovino representan el " + porcentajeVacas + " % del total")
    } else {
        break
    }
} while( datoPorcentaje != "si")




