function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) 
    return operation()
    return repeat(operation, --num)
    
  }

  function trampoline(fn) {
    // You probably want to implement a trampoline!   
    repeat(fn,100);
  }

  module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    //return repeat(operation, num)
    /*let j = 0;
    for(var i=0;i<num;i++)
    {
      if(i%100)*/
        trampoline(operation)      
    //}
  }