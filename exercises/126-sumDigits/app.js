function sumDigits(num) {
    if (num < 0) {
        let string = num.toString()
        let arr = string.split('');
        let firstDigit = arr[0]+arr[1];
        console.log(arr)
        arr.shift();
        arr.shift();
        arr.unshift(firstDigit);
        const newArr = arr.map(x => parseInt(x));
        console.log(newArr);
        return newArr.reduce((x,y) => x+y)    
    } else {
    let string = num.toString()
    let arr = string.split('');
    const newArr = arr.map(x => parseInt(x));
    console.log(newArr);
    return newArr.reduce((x,y) => x+y)
}
}

let output = sumDigits(-316);
console.log(output); // --> 4