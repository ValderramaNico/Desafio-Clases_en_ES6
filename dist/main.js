"use strict";

var _Cliente = require("./dominio/Cliente.js");
var _Impuesto = require("./dominio/Impuesto.js");
var impuesto = new _Impuesto.Impuesto(1100, 100);
var nuevoCliente = new _Cliente.Cliente("Nicolás", impuesto);
console.log(nuevoCliente);
console.log(nuevoCliente.calcularImpuesto());
var unArreglo = [];
for (var index = 0; index < 100; index++) {
  var _impuesto = new _Impuesto.Impuesto(Math.floor(Math.random() * 10000 + 1000), Math.floor(Math.random() * 1000 + 100));
  var _nuevoCliente = new _Cliente.Cliente("Nicolás", _impuesto);
  unArreglo.push(_nuevoCliente);
}
console.dir(unArreglo);
unArreglo.forEach(function (cliente) {
  return console.log("".concat(cliente.nombre, " debe ").concat(cliente.calcularImpuesto()));
});