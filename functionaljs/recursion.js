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
    return reducir(Array.from(arr),initial);
  }

  module.exports = reduce;