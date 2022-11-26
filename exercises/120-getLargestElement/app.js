function getLargestElement(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray[sortedArray.length-1];
}
}


let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;