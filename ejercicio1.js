function Computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador
    this.ram = ram;
    this.precio = precio;
}

let computadores = []

computadores.push(
    new Computador("ASUS", "ryzen 5", 4, 2000000),
    new Computador("MSI", "Ryzen 7", 16, 4500000),
    new Computador("HP", "Intel i9", 8, 3200000))

for (let i = 0; i < computadores.length; i++) {
    console.log(
        `PC: ${computadores[i].marca}
        Procesador: ${computadores[i].procesador}
        RAM: ${computadores[i].ram} GB
        Precio: ${computadores[i].precio} COP
`);
}