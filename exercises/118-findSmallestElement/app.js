/*

function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let result = arr[0].length;
        arr.forEach(function(x) {
        if (x.length < result) {
            result = x;
        }
    });
    return result;
}
}

*/

function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        const sortedArray = arr.sort((a, b) => a - b);
        return sortedArray[0];
}
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1