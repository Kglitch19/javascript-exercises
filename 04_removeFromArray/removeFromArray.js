const removeFromArray = function(array, ...values) {
   const newArray = [];
   array.forEach((item) => {
    if (!values.includes(item)) {
        newArray.push(item);
    }
   })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
