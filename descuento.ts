import * as readlineSync from "readline-sync";
let pProducto:number;
let cantidad:number;
let compra:number;
console.log("--------------------------------------------");
console.log("------------Aplicar Descuento---------------");
console.log("--------------------------------------------");
pProducto = readlineSync.questionFloat("Ingrese el precio del producto: ");
cantidad = readlineSync.questionFloat("Ingrese la cantidad a comprar: ");
console.log("\n");
compra = pProducto * cantidad;
if (compra > 1000) {
                     compra = compra - ((compra/100)*10);
                    }
console.log("El precio de la compra es: ", compra);                
