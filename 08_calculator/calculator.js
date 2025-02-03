const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
  let result = 0;
  if(array.length != 0)
  {
    for(let i = 0; i < array.length; i++)
    {
      result += array[i];
    }
    return result;
  }
  else
  {
    return 0;
  }
};

const multiply = function(array) {
  let result = array[0];
  for(let i = 1; i < array.length; i++)
  {
    result *= array[i];
  }
  return result;
}


const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(n) {
  if (n === 0 || n === 1) 
  { 
    return 1; 
  } 
  else 
  { 
    return n * factorial(n - 1); 
  } 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
