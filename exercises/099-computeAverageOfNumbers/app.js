function computeAverageOfNumbers(array) {
    if (array.length === 0) {
        return 0;
    } else {
    let total = array.reduce((x, y) => {
        return x + y;
    });
    console.log(total)
    console.log(array.length);
    return total/array.length;    
}
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3