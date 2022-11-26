function findShortestWordAmongMixedElements(arr) {
    const filteredArr = arr.filter(x => typeof x === 'string');
    let result = filteredArr[0];
    if (filteredArr.length === 0) {
        return "";
    } else {
    for (let i = 0; i < filteredArr.length; i++) {
        if (filteredArr[i].length < filteredArr[0].length) {
            result = filteredArr[i];
        }
    }
}
    return result;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'