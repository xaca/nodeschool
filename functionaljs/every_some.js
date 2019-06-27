/*

    Notas:

    * Si una función retorna otra función, en el momento de invocarlas se haría
      algo como esto:

      function a(param1){ return function b(param2){return param1 + " "+ param2}}
      console.log(a("hola ")("mundo"));

      output: "hola mundo"
    
    * La función every prueba uno a uno los elementos que cumplan una condición definida
      en una función, y retorna verdadero si todos los elementos la cumplen.
    
    * La función some, prueba todos los elementos también con una función y retorna
      verdadero si algun elemento cumple con la condición.

    * Para este ejercicio hay que encadenar el resultado de every con some, para lograr una
      validación de un elemento del array a, con todos los elementos del array b.

      a = [ 1, 2, 3]  b = [2, 1, 3]

      1 === 2, 1 === 1, 1 === 3

*/

function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers)
    {
        return submittedUsers.every(x=>goodUsers.some(y=>y.id===x.id));
        
    };
}
module.exports = checkUsersValid;