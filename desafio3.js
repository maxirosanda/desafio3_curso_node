

const fin = (a) => console.log(`Proceso terminado , la cantidad de palabras es: ${a}`)

const dividirCadena = (...array) => new Promise ( resuelve =>{
   
    if(isNaN(array[1]))  {retardo=1000 }else {retardo = array[1]}
   if (typeof array[1] === 'function') {cb= array[1]} else {cb = fin}
   if (typeof array[2] === 'function') {cb= array[2]} else { cb = fin}

    var arrayDeCadenas = array[0].split(" ")

    for (let i in arrayDeCadenas) {
        
        (function (i) {
            
            setTimeout(()=>{
                console.log(arrayDeCadenas[i] + " ")
                
                if (i == arrayDeCadenas.length - 1) {
                    cb(Number(i) + 1)
                    resuelve()
                    }   

             },retardo * (Number(i))) 
            
        })(i)

    }  
   
   
    })
    


var cadenaVerso = "Es sobre esta atestiguación que el equipo de Creación Morgan ha decidido abrir un departamento."
var cadenaVerso2 = "Oh brave new world that has such people in it."
var cadenaVerso3 = "Iniciales bordadas en el interior de la chaqueta, trajes de gala, de los chalecos fraces y colas de urraca."

dividirCadena(cadenaVerso,500,(a)=>{console.log(`pase la funcion por parametro. cant palabras:${a}`)})
.then(() => dividirCadena(cadenaVerso2))
.then(() => dividirCadena(cadenaVerso3,200,fin))
    
 
