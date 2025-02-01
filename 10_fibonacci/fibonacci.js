const fibonacci = function(a) {
    if(typeof(a)==="string") a = parseInt(a);
    if(a<0) return "OOPS";
    if(a===0) return 0;
    var addOne = 1;
    var addTwo = 1;
    if (a===1||a===2) return addOne;
    for(i=2; i<a; i++){
        var addThree = addOne + addTwo;
        addOne = addTwo;
        addTwo = addThree;
    }
    return addTwo;
};

// Do not edit below this line
module.exports = fibonacci;
