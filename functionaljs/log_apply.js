var slice = Array.prototype.slice;

function logger(namespace) {
    // SOLUTION GOES HERE
    return function(){
        var temp = (Array.from(arguments).slice(0));
        temp.unshift(namespace);
        console.log.apply(null,temp);
    }
}
//var fn = logger("WTF");
//fn("GSD");
module.exports = logger;