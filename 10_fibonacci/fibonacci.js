const fibonacci = function(number) {
    let num1 = 0, num2 = 1, nextTerm;

    if(number < 0)
    {
        return "OOPS";
    }
    for (let i = 1; i <= number; i++)
    {
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
