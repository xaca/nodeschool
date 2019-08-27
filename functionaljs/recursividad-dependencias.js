function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    if(tree)
    {
      console.log(tree.dependencies)
      if(tree.dependencies)
      {
        let temp = Object.keys(tree.dependencies)
        console.log(temp.length)
        if(temp.length)
        {
          console.log(temp.pop())
          return getDependencies(temp)              
        }      
      }
    }
    console.log("-----------------")
    return undefined
  }

  module.exports = getDependencies