function getAllElementsButNth(array, n) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== n) {
            newArr.push(array[i]);
        }
    }
    return newArr
  }  
  
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']