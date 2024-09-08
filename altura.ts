import * as readlineSync from "readline-sync";
let alturaPersona: number;
console.log("------------------------------------------");
console.log("------------ Acceso a Juego --------------");
console.log("------------------------------------------");
alturaPersona = readlineSync.questionFloat("Ingrese altura persona: ");
console.log("\n");
if (alturaPersona >= 1.30 ) {
                             console.log("La persona puede acceder al juego");
                            }
                            else {
                                    console.log("La persona NO TIENE ACCESO al juego");
                                 }