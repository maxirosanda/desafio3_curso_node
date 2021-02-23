// Clase 3: Ejercicio 1 //
/*
const operacion = (numero1,numero2,callback) =>{
console.log(callback(numero1,numero2))
}

const suma = (numero1,numero2) => numero1 + numero2
const resta = (numero1,numero2) => numero1 - numero2
const multi = (numero1,numero2) => numero1 * numero2
const divi = (numero1,numero2) => numero1 / numero2
const modulo = (numero1,numero2) => numero1 % numero2
operacion(10,5,suma)
*/

/*
console.log('>> INICIO --> Clase 3 Ejercicio 2 - a.')

const delay = ret => { for (let i = 0; i < ret * 3e6; i++); }

function hacerTarea(num) {
  console.log('haciendo tarea ' + num)
  delay(100)
}
console.log('inicio de tareas');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('fin de tareas')
console.log('otras tareas ...')

console.log('>> FIN --> Clase 3 Ejercicio 2 - a.')
*/
/*
console.log('>> INICIO --> Clase 3 Ejercicio 2 - b.')

    // Comportamiento Asincrónico --> Usar callbacks.
    
    function hacerTarea(num, cb) {
      console.log('haciendo tarea ' + num)
      setTimeout(cb, 100)
    }

    console.log('inicio de tareas');
    hacerTarea(1, () => {
      hacerTarea(2, () => {
        hacerTarea(3, () => {
          hacerTarea(4, () => {
            console.log('fin de tareas')
          })
        })
      })
    })
    console.log('otras tareas ...')

    console.log('>> FIN --> Clase 3 Ejercicio 2 - b.')
*/



const fin = () => console.log('termino')

const mostrarLetras = (palabra,retardo,cb) =>{
    
    let objetoPalabra = Object.values(palabra)
    
    for(let i in objetoPalabra) {
        (function (i) {
        setTimeout(()=>{
            
            console.log(objetoPalabra[i])

            if (i == objetoPalabra.length - 1) { cb() }

         },retardo * (Number(i) + 1)) 
        })(i);
    }
  

}
mostrarLetras("hola" ,1000,fin)
console.log('>> FIN --> Clase 3 Ejercicio 3.')



/*
// Comportamiento sincrónico 
console.log('>> INICIO --> Clase 3 Ejercicio 3.')
const fin = () => console.log('terminé')

function mostarLetras(param, retardo, callback) {
  let arr = Object.values(param)
  for (let i in arr) {
    (function (i) {
      setTimeout(function () {
        console.log(arr[i]);
        if (i == arr.length - 1) {
          callback()
        }
      }, retardo * (Number(i) + 1));
    })(i);
  }
}

// Retardo 1seg
 mostarLetras('Hola', 1000, fin)

// Retardo 500mseg
// mostarLetras('¡Hola!', 500, fin)

// Retardo 250mseg
// mostarLetras('¡Hola!', 250, fin)

// [¡,H,o,l,a,!]
console.log('>> FIN --> Clase 3 Ejercicio 3.')
*/

