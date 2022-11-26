function findSmallestNumberAmongMixedElements(arr) {
  const filteredArr = arr.filter(x => typeof x === 'number');
  let result = filteredArr[0];
  if (filteredArr.length === 0) {
      return 0;
  } else {
  for (let i = 0; i < filteredArr.length; i++) {
      if (filteredArr[i] < filteredArr[0]) {
          result = filteredArr[i];
      }
  }
}
  return result;
}

  
let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4