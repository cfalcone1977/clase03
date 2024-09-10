import * as readlineSync from "readline-sync";
console.clear;
let numero:number;
let parImpar:number;
console.log("--------------------------------------------");
console.log("--Ingrese Numero a determinar par o impar---");
console.log("--------------------------------------------");
numero = readlineSync.questionInt("Ingrese el número: ");
parImpar = numero % 2;
console.log("\n", parImpar);
if (parImpar == 0) {
                   console.log("EL NUMERO ES PAR");   
                  }
                else {
                      console.log("EL NUMERO ES IMPAR"); 
                     }
                        