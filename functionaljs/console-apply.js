 var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    return function(){
        let arr = Array.from(arguments).slice(0);
        arr.unshift(namespace);
        console.log.apply(console,arr);
    }
}

module.exports = logger