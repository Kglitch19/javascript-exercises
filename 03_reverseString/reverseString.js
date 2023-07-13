const reverseString = function(word) {
    let str = "";
    for(let i = word.length-1; i >= 0; i--) {
        str += word[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
