const palindromes = function (inputStr) {
    inputStr = inputStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    inputStr = inputStr.replace(/\s/g, "");
    inputStr = inputStr.toLowerCase();
    const inputLen = inputStr.length;
    let newStr = "";
    for (let i=inputLen-1; i>-1; i--){
        newStr += inputStr[i];
    }
    if (inputStr==newStr) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
