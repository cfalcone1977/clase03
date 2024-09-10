import * as readlineSync from "readline-sync";
let puesto:number;
console.log("--------------------------------------------");
console.log("------------Determinar Medalla--------------");
console.log("--------------------------------------------");
puesto = readlineSync.questionInt("Ingrese la posición de llegada: ");
console.log("\n");
/***if (puesto === 1) {
                   console.log("La medalla a entregar es ORO");   
                  }
                else if (puesto===2){
                                      console.log("La medalla a entregar es PLATA"); 
                                    }
                                    else if (puesto===3){
                                                        console.log("La medalla a entregar es BRONCE");
                                                        }
                                                        else {
                                                            console.log("Por la participación se entrega CERTIFICADO");
                                                             } 
 ***/
switch (puesto)
                {
                case 1:
                    console.log("La medalla a entregar es ORO"); 
                    break;
                case 2:
                    console.log("La medalla a entregar es PLATA"); 
                    break;
                case 3:
                    console.log("La medalla a entregar es BRONCE"); 
                    break;
                default:
                    if (puesto <= 0) {
                                      console.log("ERROR EN INGRESO PUESTO");
                                     }
                                     else {
                                           console.log("Por la participación se entrega CERTIFICADO");
                                          }
                }