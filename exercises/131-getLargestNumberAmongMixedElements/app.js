function getLargestNumberAmongMixedElements(arr) {
    const filteredArr = arr.filter(x => typeof x === 'number');
    let result = filteredArr[0];
    if (filteredArr.length === 0) {
        return 0;
    } else {
    for (let i = 0; i < filteredArr.length; i++) {
        if (filteredArr[i] > filteredArr[0]) {
            result = filteredArr[i];
        }
    }
  }
    return result;
  }

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5