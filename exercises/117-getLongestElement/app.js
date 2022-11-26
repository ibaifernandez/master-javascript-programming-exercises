function getLongestElement(arr) {
    if (arr.length === 0) {
        return "";
    } else {
        let result = arr[0].length;
        arr.forEach(function(x) {
        if (x.length > result) {
            result = x;
        }
    });
    return result;
}
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'