const add = function( a , b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total , item) => total + item ,0 );
};

const multiply = function(arr) {
  return arr.reduce( ( product , current) => product * current);
};

const power = function(a , b) {
	return a**b;
};

const factorial = function(num) {
  let fact =1;
	for (let i=0; i<num; i++)
  {
    fact*=num-i;

  }
  return fact;
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
