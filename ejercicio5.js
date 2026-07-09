const prompt = require("prompt-sync")();
function Vehiculo(marca, modelo, ruedas, precio) {
    this.marca = marca;
    this.modelo = modelo
    this.ruedas = ruedas;
    this.precio = precio;
    this.velocidad = 0;

    this.acelerar = function () {
        this.velocidad += 10;
        console.log(`Vehiculo  ${marca} ${modelo} acelerando a ${this.velocidad}km/h`)

    }
    this.frenar = function () {
        this.velocidad = 0;
        console.log(`Vehiculo ${marca} ${modelo} Frenando, Velocidad: ${this.velocidad}km/h`)

    }
    this.pitar = function () {
        console.log(`Vehiculo ${marca} ${modelo} peeep peeep!`)
    }
}
let marca = prompt("Ingresa la marca de tu vehiculo: ")
let modelo = prompt("Ingresa el modelo de tu vehiculo: ")
let ruedas = prompt("Ingresa cuantas ruedas tiene tu vehiculo: ")
let precio = prompt("Ingresa el precio de tu vehiculo: ")

let vehiculo = new Vehiculo(marca, modelo, ruedas, precio)

vehiculo.acelerar();
vehiculo.acelerar();
vehiculo.frenar();
vehiculo.pitar();

