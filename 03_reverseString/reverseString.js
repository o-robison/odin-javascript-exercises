const reverseString = function(originalString) {
    let endPosition  = originalString.length-1;
    let newString = "";
    for (let i=endPosition; i>-1; i--){
        newString += originalString[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
