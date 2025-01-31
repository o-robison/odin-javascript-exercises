const sumAll = function(numOne, numTwo) {
    if (numOne<0 || numTwo<0) return "ERROR";
    if ((typeof numOne != "number") || (typeof numTwo != "number")) return "ERROR";
    if ((Math.floor(numOne) != numOne) || (Math.floor(numTwo) != numTwo)) return "ERROR";

    if (numOne > numTwo) {
        let temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    }

    let result = 0;
    for (let i=numOne; i<(numTwo+1); i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
