function Estudiante(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
    if (this.nota >= 3.0) {

        this.aprobado = true
    }

    this.mostrarResultados = function () {
        if (this.aprobado) {
           console.log(`Estudiante: ${this.nombre}, aprobado`); 
        } else {
           console.log(`Estudiante: ${this.nombre}, reprobado`); 
        }
    }
}

let estudiantes = [
    new Estudiante("Camilo", "11", 3.2),
    new Estudiante("Pedro", "13", 2.5),
    new Estudiante("Estefania", "12", 5.0),
    new Estudiante("Teresa", "14", 3.0),
]

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].mostrarResultados());
}
