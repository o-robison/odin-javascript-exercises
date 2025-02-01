const getTheTitles = function(books) {
    var result = [];
    books.forEach((book, index) => {
        result[index] = book.title;
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
