function keep(obj, keeper) {
    const newArr = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i] === keeper) {
            newArr.push(obj[i]);
        }
    }
    return newArr;
}
  
let output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
