const removeFromArray = function(inputArray) {
    let removeNum = arguments.length;
    let newArray = [];
    for (element of inputArray){
        let addElement = true;
        for (let i=1; i<removeNum; i++){
            if (arguments[i]===element) {
                addElement = false;
            }
        }
        if (addElement) newArray.push(element);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
