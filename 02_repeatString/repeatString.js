const repeatString = function(word, repeatNum) {
    if (repeatNum < 0) return "ERROR";
    let newWord = "";
    for (let i=0; i<repeatNum; i++){
        newWord += word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
