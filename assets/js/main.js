import { Cliente } from "./dominio/Cliente.js";
import { Impuesto } from "./dominio/Impuesto.js";

const impuesto = new Impuesto(1100, 100);
const nuevoCliente = new Cliente("Nicolás", impuesto);
console.log(nuevoCliente);

console.log(nuevoCliente.calcularImpuesto());

const unArreglo = [];

for (let index = 0; index < 100; index++) {

  const impuesto = new Impuesto(Math.floor(Math.random()*10000+1000), Math.floor(Math.random()*1000+100));
  const nuevoCliente = new Cliente("Nicolás", impuesto);
  unArreglo.push(nuevoCliente)
}

console.dir(unArreglo)

unArreglo.forEach(cliente => console.log(`${cliente.nombre} debe ${cliente.calcularImpuesto()}`))