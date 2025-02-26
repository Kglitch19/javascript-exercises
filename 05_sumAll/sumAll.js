const sumAll = function(start, end) {
    let sum = 0;
    let temp = 0;

    // display ERROR message for non-numbers
    if (!(Number.isInteger(start) && Number.isInteger(end))) {
        return "ERROR";
    }

    // display ERROR message for negative numbers
    if (start < 0 || end < 0) {
        return "ERROR";
    }

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
