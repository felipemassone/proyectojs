
function mostrarMensaje() {
    alert("Bienvenidos a Ropero Negro!");
  }

  mostrarMensaje();





let ropa = prompt(`Elija una prenda:
remeras
buzos
gorros
`);

switch (carrito) {
case "remeras":
  alert("Tienen un costo de: $2000");
  break;
case "buzos":
  alert("Tienen un costo de: $3000");
  break;
case "gorros":
  alert("Tienen un costo de: $1000");
  break;
default:
  alert("No tenemos stock :(");
  break;
}


// const listaNombre = [];
// sea ​​cantidad = 5;
// hacer {
//   let entrada = prompt("Ingrese nombre");
//   listaNombre.push(entrada.toUpperCase());
//   console.log(listaNombre);
// } while (listaNombre.longitud != cantidad);
// */


function oferta() {
  alert("OFERTAS DE VERANO POR MENOS DE $1500!");
}

oferta();


const carritoVerano = [ 
  { nombre: "Mallas", precio: 1000 },
  { nombre: "Bermudas", precio: 2500 },
  { nombre: "Ojotas", precio: 1000 },
  { nombre: "Anteojos", precio: 500 },
];
let resultado = carritoVerano.filter((p) => {
  return p.precio <= 1500;
});

console.log(resultado);


let efectivo = prompt("Abona con efectivo?");
let importe = parseFloat(prompt("ingrese importe"));
let descuento = 10;
let calculo = (importe * descuento) / 100;
let total = importe - calculo;


function descuento1(total, importe, ropa1){
    switch (ropa1){
    case "si":
    return total;
    break;

    case "no":
      return importe
      break;
      default:
        break;


}
}


console.log("Usted tiene descuento", "si")
    alert("Tu total a pagar es $" + total, "si");

    console.log("Usted no tiene descuento", "no")
      alert ("Tu total a pagar es $"+  importe, "no")



