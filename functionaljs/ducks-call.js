function duckCount() {
    // SOLUTION GOES HERE
    /* return (Array.from(arguments).filter = function(object){
        console.log(object)    
        return true;//Object.prototype.hasOwnProperty.call(object, 'quack');
        }).length; */
    return Array.from(arguments).filter(function(object){
        return Object.prototype.hasOwnProperty.call(object, 'quack');
    }).length;
  }
  console.log(duckCount({},{quak:""}))
  module.exports = duckCount;