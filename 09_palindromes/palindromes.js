const palindromes = function (string) {
    let removePunctuation = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase().replace(/\s+/g, '');
    console.log(removePunctuation);
    let reversedString = removePunctuation.split('').reverse().join('');
    console.log(reversedString);
    if(removePunctuation === reversedString)
    {
        return true;
    }
    else
    {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
