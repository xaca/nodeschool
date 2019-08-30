function curryN(fn, n) {
    // SOLUTION GOES HERE 
    if(n)
        return curryN(fn, (fn)=>(Array.from(arguments)));
    else
        return 1;
    
  }

  module.exports = curryN