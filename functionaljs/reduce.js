/* Notas del ejercicio:

   La función reduce, se encarga de iterar sobre los elementos de
   un array, se puede configurar con varios parametros, acá se uso
   dos principalmente. El primero se llama el acumulador, el cual 
   es un valor que se pasa de manera recursiva al reduce, para que
   sea tenido en cuenta en la siguiente iteración, el segundo valor
   es el valor actual y corresponde al elemento iterado actualmente
   en el arreglo.

   En esta solución, realice varias pruebas antes de poder entender
   como funciona la función o reductor que es una función que uno debe
   crear, mis pruebas fueron:

    * Agregar un arrow function, con 2 parametros y luego un console log
    para ir mirando que valores tomaban los dos parametros en cada
    iteración, y además agregue un valor de retorno constante, pues esto
    es necesario por tratarse de una función recursiva.

    * Luego de entender que el valor retornado la primera vez, se asignaba
    la segunda iteración como el primer valor, empece a revisar como se
    podia mantener el valor que pedía el ejercicio.

    * Intente creando variables, creando objetos, pero simplemente por
    realizar pruebas, ya que cuando se trabaja con recursividad, la clave
    es mantener simple el código.

    * Luego en la documentación, hay información sobre otros parametros
    que se pueden usar con la función reductora, los cuales son el indice y
    el array actual, pero estos valores no eran relevantes.

    * Sin embargo al llamar la función reductora, usando el reduce, es posible
    pasar un valor inicial, por acá estaba la clave para el ejercicio.

    * Lo primero que se prueba, es usar un número, para ir incrementandolo,
    esto funciona, pero hay poca relación con el resultado final.

    * Luego se hacen pruebas con un arreglo, ya que permite manipular propiedades
    de una manera más sencilla, usando notación clave valor.

    * La clave, pasar un arreglo vacío y usar las claves, para ir llevando un
    contador sobre las ocurrencias de una palabra. Sin embargo el ejercicio al final
    retornaba un arreglo, y aunque tenía la información solicitada, se debia 
    realizar una conversión de array a objeto y una de las condiciones era no usar
    ciclos o funciones de ayuda.

    * Finalmente la solución, era mantenerlo simple, se cambia el array vacío
    por un objeto vacío, y listo :)

*/

var reducer = function(x,y){ x[y] = x[y]?x[y]+1:1; return x;}
function countWords(inputWords) {
      // SOLUTION GOES HERE
      return inputWords.reduce(reducer,{});
  /*var ans = inputWords.reduce(reducer,[]);
  var obj = {};
  for(i in ans)
  {
    obj[i] = ans[i];
  }
  return obj;*/
}
  
module.exports = countWords