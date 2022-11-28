function average(array_of_numbers) {
  let addition = sum(array_of_numbers);
  let finalResult = addition/array_of_numbers.length
  return finalResult;

}

function sum(numbers) {
  const result = numbers.reduce((x,y) => x + y);  
  console.log(result)
  return result
}

console.log(average([5, 15, 60, 2]));

// Why (and how) does sum() works within the body of the first function
// if it has not yet been compiled 