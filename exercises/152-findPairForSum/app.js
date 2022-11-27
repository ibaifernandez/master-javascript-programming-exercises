function findPairForSum(array, number) {
    const finalArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(`${array[i]} is to ${array[j]}`)
            if (array[i] + array[j] === number) {
                finalArr.push(array[i], array[j]);
                return finalArr
            }
        }
    }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]