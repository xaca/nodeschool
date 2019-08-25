function Spy(target, method) {
    // SOLUTION GOES HERE
    target.count = 0;
    let fn = target[method];   
    console.log(fn+" "+method); 
    target[method] = ()=>{fn();target.count++};
    return target;
  }

  module.exports = Spy