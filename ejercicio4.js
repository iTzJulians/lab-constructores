function Libro(nombre, paginas, autor) {
    this.nombre = nombre;
    this.paginas = paginas
    this.autor = autor;
    this.esPrestado = false;

    this.prestar = function () {
        if (!this.esPrestado) {
            this.esPrestado = true;
            console.log("libro prestado");

        }
        else {
            console.log("Este libro ya fue prestado a otra persona!");

        }
    }
    this.devolver = function () {
        if (this.esPrestado) {
            this.esPrestado = false;
                        console.log("libro devuelto");

        }
        else {
            console.log("Este libro ya fue devuelto!");
        }
    }
}

let libro1 = new Libro("Cien años de soledd",
    496, "Gabriel Garcia Marquez");
//pruebas
libro1.devolver();
libro1.prestar();
libro1.prestar();
libro1.devolver();