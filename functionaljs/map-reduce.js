/*
    x -> Valor que se le pasa al inicio y el cual se ira actualizando en cada llamado
    y -> Valor Actual, el item del arreglo
    z -> Indice del array
    k -> El array completo
*/
var reducer = (x,y,z,k)=>{ if(z < k.length){x[z] = x(k[z]);} return x;};//console.log(x+" "+y+" "+k[z]); return x;};
module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    var res = [];
    var ans = arr.reduce(reducer,fn);    
    for(i in ans)
    {
        res.push(ans[i]);
    }
    return res;
}