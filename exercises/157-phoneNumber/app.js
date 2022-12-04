let numbers = [6, 5, 0, 8, 3, 5, 9, 1, 7, 2];

function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  let string = '';
  if (numbers.length !== 10) {
    return "Fuck off!"
  } else {
    string = this.numbers.join('');
    console.log(numbers);
  }
  return string;
};

console.log(PhoneNumberFormatter.render())

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};