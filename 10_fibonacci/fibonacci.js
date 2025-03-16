const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return "OOPS";
    let previous = 0;
    let aux = 0;
    let current = 1
    for (let i = 0; i < n; i++) {
        aux = current;
        current += previous;
        previous = aux;
    }
    return previous;
};

// Do not edit below this line
module.exports = fibonacci;
