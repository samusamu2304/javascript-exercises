const sumAll = function(start, end) {
    if (!Number.isInteger(start)  || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }else if (start > end) {
        let aux = start;
        start = end;
        end = aux;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
