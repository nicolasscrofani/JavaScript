/*
Mostrar información
Enunciado:
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/
function mostrar() {
  let carrera;
  let sexo;
  let materias;
  let notaPromedio;
  let edad;
  let nombre;

  let flagMejorPromedio = 1;
  let nombreMejorPromedio;
  let notaPromedioMejorPromedio;

  let flagAlumnaMasJoven = 1;
  let nombreAlumnaMasJoven;
  let edadAlumnaMasJoven;

  let contQ = 0;
  let contF = 0;
  let contS = 0;
  let contTotal = 0;
  let porcentajeQ;
  let porcentajeF;
  let procentajeS;

  let flagCursaMas = 1;
  let edadCursaMas;
  let nombreCursaMas;
  let materiasCursaMas;

  for (let i = 0; i < 500; i++) {
    nombre = prompt("ingrese nombre:");
    while (!isNaN(nombre)) {
      nombre = prompt("error. ingrese nombre valido (no puede ser un numero):");
    }
    carrera = prompt(
      'ingrese carrera: "quimica/fisica/sistemas"'
    ).toLowerCase();
    while (
      carrera != "quimica" &&
      carrera != "fisica" &&
      carrera != "sistemas"
    ) {
      carrera = prompt(
        'error, ingrese carrera: "quimica/fisica/sistemas"'
      ).toLowerCase();
    }
    sexo = prompt("Ingrese sexo (femenino/masculino/nobinario):").toLowerCase();
    while (sexo != "femenino" && sexo != "masculino" && sexo != "nobinario") {
      sexo = prompt(
        "Error. Ingrese sexo (femenino/masculino/nobinario):"
      ).toLowerCase();
    }
    materias = parseInt(
      prompt("Ingrese la cantidad de materias (entre 1 y 5):")
    );
    while (!(materias >= 1 && materias <= 5)) {
      materias = parseInt(
        prompt("Error. Ingrese la cantidad de materias (entre 1 y 5):")
      );
    }
    notaPromedio = parseInt(prompt("Ingrese nota promedio(entre 0 y 10):"));
    while (!(notaPromedio >= 0 && notaPromedio <= 10)) {
      notaPromedio = parseInt(
        prompt("Error. Ingrese nota promedio (entre 0 y 10):")
      );
    }
    edad = parseInt(prompt("ingrese edad:"));
    while (edad <= 0 || isNaN(edad)) {
      edad = parseInt(prompt("error, ingrese una edad valida"));
    }

    //A
    if (
      materias == "fisica" &&
      (flagMejorPromedio || notaPromedio > notaPromedioMejorPromedio)
    ) {
      notaPromedioMejorPromedio = notaPromedio;
      nombreMejorPromedio = nombre;
      flagMejorPromedio = 0;
    }

    //B
    if (sexo == "f" && (flagAlumnaMasJoven || edad < edadAlumnaMasJoven)) {
      edadAlumnaMasJoven = edad;
      nombreAlumnaMasJoven = nombre;
      flagAlumnaMasJoven = 0;
    }

    //D
    if (
      materias != "quimica" &&
      (flagCursaMas || materias > materiasCursaMas)
    ) {
      edadCursaMas = edad;
      nombreCursaMas = nombre;
      materiasCursaMas = materias;
      flagCursaMas = 0;
    }

    //C
    if (carrera == "fisica") {
      contF++;
    } else if (carrera == "quimica") {
      contQ++;
    } else {
      contS++;
    }
    contTotal++;
  } //fin del for

  //A
  if (flagMejorPromedio) {
    console.log("A- No se ingresaron alumnos que estudien fisica");
  } else {
    console.log(
      "A- El nombre del alumno que estudia fisica con mejor promedio es " +
        nombreMejorPromedio +
        " con un promedio de " +
        notaPromedioMejorPromedio
    );
  }

  //B
  if (flagAlumnaMasJoven) {
    console.log("B- No se ingresaron alumnas");
  } else {
    console.log(
      "B- El nombre de la alumna mas joven es " +
        nombreAlumnaMasJoven +
        " con una edad de " +
        edadAlumnaMasJoven
    );
  }

  //D
  if (flagCursaMas) {
    console.log("D- No se ingresaron personas que cursen fisica o sistemas");
  } else {
    console.log(
      "D- El nombre del estudiante que cursa mas materias exceptuando la carrera quimica es " +
        nombreCursaMas +
        " con una edad de " +
        edadCursaMas +
        " cursando " +
        materiasCursaMas +
        " materias"
    );
  }
  //C
  if (contQ > 0) {
    porcentajeQ = (contQ * 100) / contTotal;
    console.log(
      "C- El porcentaje de estudiantes que estudia quimica es " + porcentajeQ
    );
  } else {
    console.log("C- No se ingresaron estudiantes de quimica");
  }
  if (contF > 0) {
    porcentajeF = (contF * 100) / contTotal;
    console.log(
      "C- El porcentaje de estudiantes que estudia fisica es " + porcentajeF
    );
  } else {
    console.log("C- No se ingresaron estudiantes de fisica");
  }

  if (contS > 0) {
    procentajeS = (contS * 100) / contTotal;
    console.log(
      "C- El porcentaje de estudiantes que estudia sistemas es " + procentajeS
    );
  } else {
    console.log("C- No se ingresaron estudiantes de sistemas");
  }
}
