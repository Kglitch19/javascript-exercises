const sumAll = function(start, end) {
    let sum = 0;
    let temp = 0;
    if (start > end) {
        // swapping values of variables
        temp = start;
        start = end;
        end = temp;
    }

    // loops through the given parameter range
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
