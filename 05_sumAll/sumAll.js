const { upperCamelCase } = require("case-anything");

const sumAll = function(min, max) {
    let swap;
    let sum;

    if(Number.isInteger(min) == false || 
       Number.isInteger(max) == false || 
       min < 0 || 
       max < 0)
    {
        return "ERROR";
    }
    if(min > max)
    {
        swap = max;
        max = min;
        min = swap;
    }
    sum = min;
    for (let i = 1; i < max; i++)
    {
        sum += min+i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
