function multiplyBetween(num1, num2) {
    let result = 1;
    if (num2 > num1) {
        for (let i = num1; i < num2; i++) {
            result *= i
        }
    } else {
        result = 0;
    }
    return result;
}

let output = multiplyBetween(4, 8);
console.log(output); // --> 24