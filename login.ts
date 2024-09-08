import * as readlineSync from "readline-sync";
let usuario: string;
let clave: string;
let usuarioRegistrado: string;
let claveRegistrada: string;
usuarioRegistrado = "Juan";
claveRegistrada = "claveJuan";

console.log("------------------------------------------");
console.log("---------------- LOGIN -------------------");
console.log("------------------------------------------");
usuario = readlineSync.question("    Usuario: ");
clave = readlineSync.question("Contraseña: ");
console.log("\n");
if (usuario === usuarioRegistrado && clave === claveRegistrada ) {
                                                                     console.log("ACCESO VALIDADO");
                                                                 }
 else {
        console.log("ACCESO DENEGADO");
      }
      