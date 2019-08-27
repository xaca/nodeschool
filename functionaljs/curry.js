function curryN(fn, n) {
    // SOLUTION GOES HERE    
    if(n)
    {    
        if(n>0) 
        {                        
            return curryN(next(1),n-1);
        } 
        else{
            return 1;
        }       
    }
    else
    {
        return curryN(next(1),fn.length-1);
    }
  }

  module.exports = curryN