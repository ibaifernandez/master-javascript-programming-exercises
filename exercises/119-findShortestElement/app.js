function findShortestElement(arr) {
    if (arr.length === 0) {
        return "";
    } else {
        let result = arr[0];
        arr.forEach(function(x) {
        if (x.length < arr[0].length) {
            result = x;
        } else {
            return arr[0];
        }
    });
    return result;
}
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'