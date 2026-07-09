function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
        console.log(
            `
            Nombre: ${this.nombre},
            Especie: ${this.especie}
            Edad: ${this.edad} años
            Peso: ${this.peso} KG
            `
        )
    }
}


let mascotas = [
    new Mascota("Paul", "Perro", 14, 8),
    new Mascota("Tommy", "Gato", 8, 4),
    new Mascota("Paco", "Caballo", 12, 200),
];
for (let i = 0; i < mascotas.length; i++) {
    mascotas[i].presentarse();
}
