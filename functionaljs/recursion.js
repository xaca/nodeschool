/*
    Notas:
    1. Ayuda usar node recursion.js, y poner un llamado a la función antes del export
    para testear el comportamiento que tiene la función.
    2. Usar run, para probar lo que recibe la función y lo que se espera que retorne.
*/

function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    function reducir(input,value){

        if(input.length)
        {
            return reducir(input.splice(1), fn(value,input[0],0,input));
        }
        else
        {
            return value;
        }
    }
    //clonar un array by: https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
    return reducir(Array.from(arr),initial);
  }

  module.exports = reduce;