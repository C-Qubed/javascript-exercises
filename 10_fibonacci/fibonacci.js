const fibonacci = function(count) {
    // input: position of number in fib series
    // output: the number at that position in fib series
    // create fib series up to count
    if (count < 0) {
        return 'OOPS';
    }
    let result = [];
    for (let i = 0; i <= count; i++) {
        if (result[i-1] === undefined || result[i-2] === undefined) {
            result.push(1);
        }
        else {
            let newFib = result[i-1] + result[i-2];
            result.push(newFib);
        }
    }
    return result[count - 1];
};

// Do not edit below this line
module.exports = fibonacci;
