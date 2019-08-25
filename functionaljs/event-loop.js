function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    setInterval(operation,10);//operation()
    return repeat(operation, --num)
    
  }

  module.exports = repeat