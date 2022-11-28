function detectOutlierValue(string) {
    const newArr = string.split(' ');
    const oddArr = [];
    const evenArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] % 2 === 0) {
            evenArr.push(newArr[i]);
        } else if (newArr[i] % 2 !== 0) {
            oddArr.push(newArr[i]);
        }
    }
    if (oddArr.length === 1) {
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < oddArr.length; j++) {
            if (newArr[i] === oddArr[j]) {
                let result = newArr.indexOf(newArr[i])
                return result+1
            }
        }
    }
}
if (evenArr.length === 1) {
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < evenArr.length; j++) {
            if (newArr[i] === evenArr[j]) {
                let result = newArr.indexOf(newArr[i])
                return result+1
            }
        }
    }
}
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2