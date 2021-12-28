/*
Enunciado:
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/
function mostrar() {
  let nombre;
  let cantidad;
  let marca;
  let seguir;
  let precio;
  let subtotal = 0;
  let importe;
  let descuento;
  let acumLamparas = 0;
  let acumA = 0;
  let contA = 0;
  let acumI = 0;
  let contI = 0;
  let acumF = 0;
  let contF = 0;
  let promA = 0;
  let promI = 0;
  let promF = 0;
  let marcaMasVentas;

  do {
    nombre = prompt("ingrese nombre:");
    while (!isNaN(nombre)) {
      nombre = prompt("error. ingrese nombre valido(no puede ser un numero):");
    }
    cantidad = parseInt(prompt("ingrese cantidad(1 o mas):"));
    while (isNaN(cantidad) || cantidad <= 0) {
      cantidad = parseInt(prompt("error. ingrese cantidad(1 o mas):"));
    }

    marca = prompt("ingrese marca felipelamparas/argentinaluz/illuminatis:");
    while (
      marca != "felipelamparas" &&
      marca != "argentinaluz" &&
      marca != "illuminatis"
    ) {
      marca = prompt(
        "error, ingrese marca felipelamparas/argentinaluz/illuminatis:"
      );
    }
    precio = parseFloat(prompt("ingrese precio:"));
    while (isNaN(precio) || precio <= 0) {
      precio = parseFloat(prompt("error, ingrese precio"));
    }

    //A
    importe = precio * cantidad;
    subtotal += importe;

    //B
    acumLamparas += cantidad;

    //C
    if (marca == "felipelamparas") {
      acumF += cantidad;
      contF++;
    } else if (marca == "argentinaluz") {
      acumA += cantidad;
      contA++;
    } else {
      acumI += cantidad;
      contI++;
    }

    seguir = prompt("quiere ingresar otro cliente? s/n ");
  } while (seguir == "s");

  if (marca == "felipelamparas" && acumLamparas > 5) {
    descuento = precio - precio * 0.1;
  } else if (marca == "argentinaluz" && acumLamparas >= 3) {
    descuento = precio - precio * 0.05;
  } else {
    descuento = 0;
  }

  //A
  console.log("A- La empresa recaudó $" + subtotal);

  //B
  if (descuento != 0) {
    console.log(
      "B- En concepto de descuentos, la empresa perdio $" + descuento
    );
  } else {
    console.log("B- La empresa no tuvo perdidas en concepto de descuento");
  }

  //C
  if (contA != 0) {
    promA = acumA / contA;
  }
  if (contI != 0) {
    promI = acumI / contI;
  }
  if (contF != 0) {
    promF = acumF / contF;
  }
  console.log(
    "C- El promedio de cantidad de lamparas vendidas de felipelamparas es " +
      promF +
      " el de argentinaluz es " +
      promA +
      " y el de illuminatis es " +
      promI
  );

  //D
  if (contA > contF && contA > contI) {
    marcaMasVentas = "argentinaluz";
  } else if (contF >= contA && contF > contI) {
    marcaMasVentas = "felipelamparas";
  } else {
    marcaMasVentas = "illuminatis";
  }
  console.log("D- La marca que mas ventas relizó fue " + marcaMasVentas);
}
