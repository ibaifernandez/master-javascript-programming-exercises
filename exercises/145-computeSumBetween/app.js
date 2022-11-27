function computeSumBetween(num1, num2) {   
    let result = 0;
    if (num2 > num1) {
        for (let i = num1; i < num2; i++) {
            result += i
        }
    } else {
        result = 0;
    }
    return result;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9