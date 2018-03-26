var findSum = function(firstValue: number, secondValue: number) {
  var sum: number = firstValue + secondValue;
  alert("The sum of your two numbers is: " + sum);
}

var firstNumber: number = parseInt(prompt('please enter a number.'));
var secondNumber: number = parseInt(prompt('enter another number.'));
findSum(firstNumber, secondNumber);
//:number is declare specific data types, but not necessary
