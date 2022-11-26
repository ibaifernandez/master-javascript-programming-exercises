function computeSumOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
  return arr.reduce((x,y) => x+y)
}
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6