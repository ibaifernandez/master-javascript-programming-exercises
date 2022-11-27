function computeFactorialOfN(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i
    }  
    return result
}

let output = computeFactorialOfN(3); console.log(output); // --> 6