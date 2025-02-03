const reverseString = function(string) {
    let stringToCharArray = string.split("");
    let reversedCharArray = stringToCharArray.reverse();
    let reversedString = reversedCharArray.join("");
    return reversedString;
};

reverseString('');

// Do not edit below this line
module.exports = reverseString;
