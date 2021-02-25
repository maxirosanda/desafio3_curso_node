const fin = (a) =>
  console.log(`Proceso terminado , la cantidad de palabras es: ${a}`);

const dividirCadena = (cadenaADividir, retardo = 1000, cb) =>
  new Promise((resuelve) => {
    var arrayDeCadenas = cadenaADividir.split(" ")(function (
      arrayDeCadenas,
      retardo,
      cb
    ) {
      for (let i in arrayDeCadenas) {
        (function (i) {
          setTimeout(() => {
            console.log(arrayDeCadenas[i] + " ");

            if (i == arrayDeCadenas.length - 1) {
              cb(Number(i) + 1);
              resuelve();
            }
          }, retardo * Number(i));
        })(i);
      }
    })(arrayDeCadenas, retardo, cb);
  });

var cadenaVerso =
  "Es sobre esta atestiguación que el equipo de Creación Morgan ha decidido abrir un departamento.";
var cadenaVerso2 = "Oh brave new world that has such people in it.";
var cadenaVerso3 =
  "Iniciales bordadas en el interior de la chaqueta, trajes de gala, de los chalecos fraces y colas de urraca.";

dividirCadena(cadenaVerso, 500, fin)
  .then(() => dividirCadena(cadenaVerso2, undefined, fin))
  .then(() => dividirCadena(cadenaVerso3, 200, fin));
