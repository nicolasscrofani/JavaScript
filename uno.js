/*
Enunciado:
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar() {
  let nombre;
  let edad;
  let sexo;
  let puesto;
  let sueldo;
  let seguir;

  let acumP = 0;
  let contP = 0;
  let acumQ = 0;
  let contQ = 0;
  let acumA = 0;
  let contA = 0;
  let promA = 0;
  let promP = 0;
  let promQ = 0;

  let flagMayorSueldo = 1;
  let sexoMayorSueldo;
  let sueldoMayorSueldo;

  let flagMayorSueldoFemenino = 1;
  let nombreMayorSueldoFemenino;
  let sueldoMayorSueldoFemenino;

  let contProgramadoresNB = 0;

  do {
    nombre = prompt("ingrese nombre:");
    while (!isNaN(nombre)) {
      nombre = prompt("error. ingrese nombre valido(no puede ser un numero):");
    }
    edad = parseInt(prompt("ingrese edad:"));
    while (edad <= 0 || isNaN(edad)) {
      edad = parseInt(prompt("error, ingrese una edad valida"));
    }
    sexo = prompt("Ingrese sexo (femenino/masculino/nobinario):").toLowerCase();
    while (sexo != "femenino" && sexo != "masculino" && sexo != "nobinario") {
      sexo = prompt(
        "Error. Ingrese sexo (femenino/masculino/nobinario):"
      ).toLowerCase();
    }
    puesto = prompt("ingrese puesto programador-analista-qa:").toLowerCase();
    while (puesto != "qa" && puesto != "programador" && puesto != "analista") {
      puesto = prompt(
        "error, ingrese puesto programador-analista-Qa:"
      ).toLowerCase();
    }
    sueldo = parseInt(prompt("ingrese sueldo (entre 15000 y 70000):"));
    while (!(sueldo >= 15000 && sueldo <= 70000)) {
      sueldo = parseInt(prompt("error, sueldo (entre 15000 y 70000):"));
    }

    //A
    if (puesto == "programador") {
      acumP += sueldo;
      contP++;
    } else if (puesto == "analista") {
      acumA += sueldo;
      contA++;
    } else {
      acumQ += sueldo;
      contQ++;
    }

    //B
    if (flagMayorSueldo || sueldo > sueldoMayorSueldo) {
      sueldoMayorSueldo = sueldo;
      sexoMayorSueldo = sexo;
      flagMayorSueldo = 0;
    }

    //C
    if (
      sexo == "f" &&
      (flagMayorSueldoFemenino || sueldo > sueldoMayorSueldoFemenino)
    ) {
      sueldoMayorSueldoFemenino = sueldo;
      nombreMayorSueldoFemenino = nombre;
      flagMayorSueldoFemenino = 0;
    }

    //D
    if (sexo == "nb" && sueldo >= 20000 && sueldo <= 55000) {
      contProgramadoresNB++;
    }

    seguir = prompt("quiere ingresar otro empleado? s/n: ");
  } while (seguir == "s");

  //A
  if (contP != 0) {
    promP = acumP / contP;
    console.log("A- El promedio de sueldos para el programador es: " + promP);
  }
  if (contA != 0) {
    promA = acumA / contA;
    console.log("A- El promedio de sueldos para el analista es: " + promA);
  }
  if (contQ != 0) {
    promQ = acumQ / contQ;
    console.log("A- El promedio de sueldos para el qa es: " + promQ);
  }

  //B
  if (flagMayorSueldo) {
    console.log("B- No se ingresaron ");
  } else {
    console.log(
      "B- El sexo de la persona de mayor sueldo es " +
        sexoMayorSueldo +
        " con un sueldo de $ " +
        sueldoMayorSueldo
    );
  }

  //C
  if (flagMayorSueldoFemenino) {
    console.log("C- no se ingresaron femeninos");
  } else {
    console.log(
      "C- el nombre del femenino de mayor sueldo es " +
        nombreMayorSueldoFemenino +
        " con un sueldo de $ " +
        sueldoMayorSueldoFemenino
    );
  }

  //D
  if (contProgramadoresNB > 0) {
    console.log(
      "D- La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es " +
        contProgramadoresNB
    );
  } else {
    console.log(
      "D- No se ingresaron no binarios que cobren entre 20000 y 55000"
    );
  }
}












