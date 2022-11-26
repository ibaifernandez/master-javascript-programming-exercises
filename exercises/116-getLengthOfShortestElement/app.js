function getLengthOfShortestElement(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let result = arr[0].length;
        arr.forEach(function(x) {
        if (x.length < result) {
            result = x.length;
        }
    });
    return result;
}
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3