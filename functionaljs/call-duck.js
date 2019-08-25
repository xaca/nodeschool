 function duckCount() {
      // SOLUTION GOES HERE      
      console.log(arguments);
      return Array.from(arguments).filter(
        (obj)=>(Object.prototype.hasOwnProperty.call(obj, 'quack'))).length;
    }

    module.exports = duckCount