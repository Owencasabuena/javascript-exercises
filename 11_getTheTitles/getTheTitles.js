const getTheTitles = function(books) {
    const title = books.map(getBookTitle).flat();
    return title;
};

const getBookTitle = function(item) 
{
    return item.title;
}
// Do not edit below this line
module.exports = getTheTitles;
