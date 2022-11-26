function getLongestWordOfMixedElements(arr) {
    const filteredArr = arr.filter(x => typeof x === 'string');
    let result = filteredArr[0];
    if (filteredArr.length === 0) {
        return "";
    } else {
    for (let i = 0; i < filteredArr.length; i++) {
        if (filteredArr[i].length > filteredArr[0].length) {
            result = filteredArr[i];
        }
    }
}
    return result;
}


let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'