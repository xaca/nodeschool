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
        console.log(tree.dependencies.length)
        if(tree.dependencies.length)
        {
          console.log(tree.dependencies.pop())
          return getDependencies(tree)              
        }      
      }
    }
    console.log("-----------------")
    return undefined
  }

  module.exports = getDependencies