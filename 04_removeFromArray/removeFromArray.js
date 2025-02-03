const removeFromArray = function(array, ...args) {
    for (let i = array.length - 1; i >= 0; i--)
    {
        for (let j = 0; j < args.length; j++)
        {
            if (array[i] === args[j])
            {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;
